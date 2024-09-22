"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the QrReader component, but make sure to import it as a named export
const QrReader = dynamic(() => import("react-qr-reader").then(mod => mod.QrReader), { ssr: false });

const Page = () => {
  const [scanResult, setScanResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setScanResult(data);
    }
  };

  const handleError = (err) => {
    setErrorMessage("QR code scanning failed.");
    console.error(err);
  };

  return (
    <div className='w-full grid place-items-center'>
      <h1 className='text-2xl font-bold'>QR Code Scanner</h1>

      <div className="w-full max-w-md mb-6">
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" }}
        />
      </div>

      {errorMessage && (
        <p className="text-red-500 font-semibold">{errorMessage}</p>
      )}

      {scanResult ? (
        <div className="bg-white p-4 rounded shadow-lg mt-4">
          <h2 className="text-lg font-bold">Scan Result:</h2>
          <p className="text-sm mt-2 break-words">{scanResult}</p>
        </div>
      ) : (
        <p className="text-gray-500">No result yet. Scan a QR code.</p>
      )}

      <button
        onClick={() => setScanResult(null)}
        className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        Reset Scanner
      </button>
    </div>
  )
}

export default Page;