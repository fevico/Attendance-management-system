"use client";
import { Suspense, useEffect, useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const QRScannerContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams(); // Hook to get query parameters
    const courseId = searchParams.get("courseId");

    useEffect(() => {
        if (!courseId) {
            toast.error("Course ID is missing.");
            router.push("/student");
        }
    }, [courseId]);

    // Handle the scan event
    const handleScan = async (data) => {
        if (data) {
            try {
                const authToken = localStorage.getItem("authToken"); // Retrieve token from localStorage
                const apiUrl = `https://attendance-management-server-g57k.onrender.com/attendance/${courseId}`;

                const response = await axios.post(apiUrl, {}, {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                });

                if (response.status === 200) {
                    toast.success("Attendance Marked Successfully!");
                } else {
                    toast.error("Failed to mark attendance. Please try again.");
                }
            } catch (error) {
                toast.error("Error marking attendance. Please try again.");
                console.error(error);
            }

            // Redirect after successful scan or error
            router.push("/student"); // Redirect to the student page
        }
    };

    // Handle scan error
    const handleError = (err) => {
        console.error(err);
        toast.error("Error scanning QR Code. Please try again.");
    };

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-3xl font-bold text-blue-600 mb-8">QR Code Scanner</h1>

            <div className="w-full max-w-md p-4 bg-white shadow-lg rounded-lg">
                {/* QR Scanner Component */}
                <Scanner onScan={handleScan} onError={handleError} className="w-full h-64 rounded-lg" />
            </div>

            <p className="mt-4 text-gray-500 text-sm">Align the QR code within the frame to scan</p>

            {/* Go Back to Home Page */}
            <Link href={"/student"}>
                <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Go Back Home
                </button>
            </Link>

            {/* Toast notifications container */}
            {/* <toast.Container position="bottom-right" autoClose={3000} hideProgressBar={false} /> */}
        </div>
    );
};

const QRScannerPage = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <Suspense fallback={<div>Loading QR Scanner...</div>}>
            <QRScannerContent />
        </Suspense>
    );
};

export default QRScannerPage;
