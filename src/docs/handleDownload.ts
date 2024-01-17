import { saveAs } from "file-saver";

export const handleDownload = () => {
  const pdfPath = "/resume-ricardo-santana.pdf";

  saveAs(pdfPath, "Resume-Ricardo-Adame-Santana");
};
