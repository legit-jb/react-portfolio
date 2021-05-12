import React from 'react';
import { Document } from 'react-pdf';
import res from "../assets/resume.pdf"

const Resume = () => {

  return (
    <div>
      <Document file={res}>
      </Document>
    </div>
  );
};

export default Resume;
