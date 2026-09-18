"""Converts scripts/cv_source.docx to public/cv.pdf using LibreOffice headless.

Usage:
    python3 scripts/docx_to_pdf.py

Requires LibreOffice installed with `soffice` on PATH:
    brew install --cask libreoffice
"""

import os
import shutil
import subprocess
import sys

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(SCRIPT_DIR, "cv_source.docx")
PUBLIC_DIR = os.path.join(SCRIPT_DIR, "..", "public")

if shutil.which("soffice") is None:
    sys.exit("soffice not found on PATH. Install LibreOffice: brew install --cask libreoffice")

if not os.path.exists(SRC):
    sys.exit(f"{SRC} not found. Run scripts/generate_cv_docx.py first, or create cv_source.docx yourself.")

subprocess.run(
    ["soffice", "--headless", "--convert-to", "pdf", "--outdir", PUBLIC_DIR, SRC],
    check=True,
)

produced = os.path.join(PUBLIC_DIR, "cv_source.pdf")
target = os.path.join(PUBLIC_DIR, "cv.pdf")
if os.path.exists(produced):
    os.replace(produced, target)
    print(f"Wrote {os.path.abspath(target)}")
else:
    sys.exit("Conversion did not produce the expected output file.")
