import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'react-pdf';
import { CustomButton } from '../../Components/Button'; // Asumiendo que tienes un componente CustomButton

const PdfPreview = ({ pdfUrl, onClose }) => {
    const [pdfFile, setPdfFile] = React.useState(null);

    React.useEffect(() => {
        // Fetch the PDF from the URL (or from the state passed as pdfUrl)
        const fetchPdf = async () => {
            const response = await fetch(pdfUrl);
            const pdfBlob = await response.blob();
            setPdfFile(pdfBlob);
        };
        fetchPdf();
    }, [pdfUrl]);

    return (
        <div className="pdf-preview-container">
            {pdfFile ? (
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
                    <Viewer fileUrl={pdfFile} />
                </Worker>
            ) : (
                <div>Cargando PDF...</div>
            )}

            <CustomButton className="close-button" onClick={onClose}>
                Cerrar
            </CustomButton>
        </div>
    );
};

export { PdfPreview };