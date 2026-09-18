"""Generates scripts/cv_source.docx — the editable source of truth for the CV.

Workflow:
    1. Edit the content in THIS file (or, after first run, open cv_source.docx
       directly in Word / Pages / Google Docs and edit it there).
    2. Run `python3 scripts/generate_cv_docx.py` to rebuild cv_source.docx from
       this script (only needed if you're editing the Python content, not if
       you're editing the .docx by hand).
    3. Run `python3 scripts/docx_to_pdf.py` to convert cv_source.docx into
       public/cv.pdf via LibreOffice headless.

Requires: pip3 install --user python-docx
"""

import os

from docx import Document
from docx.shared import Pt, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_ALIGN_VERTICAL
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(SCRIPT_DIR, "cv_source.docx")
PHOTO = os.path.join(SCRIPT_DIR, "assets", "profile.jpg")

ACCENT = RGBColor(0x0F, 0x9D, 0x6A)
MUTED = RGBColor(0x44, 0x44, 0x44)
BLACK = RGBColor(0x11, 0x11, 0x11)

doc = Document()

section = doc.sections[0]
section.top_margin = Cm(1.1)
section.bottom_margin = Cm(1.0)
section.left_margin = Cm(1.4)
section.right_margin = Cm(1.4)

style = doc.styles["Normal"]
style.font.name = "Calibri"
style.font.size = Pt(10.2)
style.paragraph_format.space_after = Pt(0)
style.paragraph_format.space_before = Pt(0)
style.paragraph_format.line_spacing = 1.12


def set_cell_border(cell, **kwargs):
    """No-op placeholder kept for clarity; header table is borderless by default."""
    pass


def add_para(text="", size=9.3, bold=False, italic=False, color=BLACK, space_before=0,
             space_after=2, font="Calibri", align=None):
    p = doc.add_paragraph()
    if align:
        p.alignment = align
    p.paragraph_format.space_before = Pt(space_before)
    p.paragraph_format.space_after = Pt(space_after)
    p.paragraph_format.line_spacing = 1.05
    if text:
        run = p.add_run(text)
        run.font.size = Pt(size)
        run.font.bold = bold
        run.font.italic = italic
        run.font.color.rgb = color
        run.font.name = font
    return p


def add_heading(text):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(16)
    p.paragraph_format.space_after = Pt(5)
    run = p.add_run(text)
    run.font.size = Pt(13)
    run.font.bold = True
    run.font.color.rgb = ACCENT
    run.font.name = "Calibri"
    # bottom border for a thin rule under the heading
    pPr = p._p.get_or_add_pPr()
    pBdr = OxmlElement("w:pBdr")
    bottom = OxmlElement("w:bottom")
    bottom.set(qn("w:val"), "single")
    bottom.set(qn("w:sz"), "4")
    bottom.set(qn("w:space"), "1")
    bottom.set(qn("w:color"), "0F9D6A")
    pBdr.append(bottom)
    pPr.append(pBdr)
    return p


def add_bullets(items, size=9.8, space_after=3.2):
    for item in items:
        p = doc.add_paragraph(style=None)
        p.paragraph_format.left_indent = Cm(0.45)
        p.paragraph_format.first_line_indent = Cm(-0.28)
        p.paragraph_format.space_before = Pt(0)
        p.paragraph_format.space_after = Pt(space_after)
        p.paragraph_format.line_spacing = 1.12
        run = p.add_run("• ")
        run.font.size = Pt(size)
        run.font.color.rgb = ACCENT
        run.font.bold = True
        run2 = p.add_run(item)
        run2.font.size = Pt(size)
        run2.font.color.rgb = BLACK


def add_job_line(role, meta, period, size=10.6):
    """Role/company on the left, period right-aligned, same line via a tab stop."""
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(13)
    p.paragraph_format.space_after = Pt(0)
    tab_stops = p.paragraph_format.tab_stops
    tab_stops.add_tab_stop(section.page_width - section.left_margin - section.right_margin,
                            alignment=3)  # WD_TAB_ALIGNMENT.RIGHT = 3
    r1 = p.add_run(f"{role}  ·  {meta}")
    r1.font.bold = True
    r1.font.size = Pt(size)
    r1.font.color.rgb = BLACK
    p.add_run("\t")
    r2 = p.add_run(period)
    r2.font.size = Pt(9.4)
    r2.font.italic = True
    r2.font.color.rgb = MUTED


# ---------------------------------------------------------------------------
# Header: name/title/contact on the left, photo on the right
# ---------------------------------------------------------------------------
header_table = doc.add_table(rows=1, cols=2)
header_table.autofit = False
header_table.columns[0].width = Cm(14.5)
header_table.columns[1].width = Cm(2.8)

left_cell, right_cell = header_table.rows[0].cells
left_cell.width = Cm(14.5)
right_cell.width = Cm(2.8)
right_cell.vertical_alignment = WD_ALIGN_VERTICAL.CENTER

# zero out default cell padding on the photo cell so centering is exact
tcPr = right_cell._tc.get_or_add_tcPr()
tcMar = OxmlElement("w:tcMar")
for side in ("top", "start", "bottom", "end", "left", "right"):
    node = OxmlElement(f"w:{side}")
    node.set(qn("w:w"), "0")
    node.set(qn("w:type"), "dxa")
    tcMar.append(node)
tcPr.append(tcMar)

lp = left_cell.paragraphs[0]
lp.paragraph_format.space_after = Pt(1)
run = lp.add_run("SAJJAD NAQVI")
run.font.size = Pt(21)
run.font.bold = True
run.font.color.rgb = BLACK
run.font.name = "Calibri"

p2 = left_cell.add_paragraph()
p2.paragraph_format.space_after = Pt(3)
r = p2.add_run("Software Development Engineer in Test (SDET)  |  AI QA Engineer  |  CI/CD & DevOps")
r.font.size = Pt(10.5)
r.font.bold = True
r.font.color.rgb = ACCENT

p3 = left_cell.add_paragraph()
p3.paragraph_format.space_after = Pt(0)
r = p3.add_run("naqveesajjad@gmail.com  |  +49 176 45960571  |  Berlin, Germany (Open to relocate within Germany)")
r.font.size = Pt(8.5)
r.font.color.rgb = MUTED

p4 = left_cell.add_paragraph()
p4.paragraph_format.space_after = Pt(0)
r = p4.add_run("linkedin.com/in/sajjad-naqvi-0bb958b2  |  github.com/NaqviSajjad")
r.font.size = Pt(8.5)
r.font.color.rgb = MUTED

rp = right_cell.paragraphs[0]
rp.alignment = WD_ALIGN_PARAGRAPH.CENTER
if os.path.exists(PHOTO):
    run = rp.add_run()
    run.add_picture(PHOTO, width=Cm(2.5), height=Cm(3.22))

# remove table borders/padding
tbl = header_table._tbl
tblPr = tbl.tblPr
borders = OxmlElement("w:tblBorders")
for edge in ("top", "left", "bottom", "right", "insideH", "insideV"):
    el = OxmlElement(f"w:{edge}")
    el.set(qn("w:val"), "none")
    borders.append(el)
tblPr.append(borders)

doc.add_paragraph().paragraph_format.space_after = Pt(2)

# ---------------------------------------------------------------------------
# Profile
# ---------------------------------------------------------------------------
add_heading("PROFILE")
add_para(
    "SDET with 5+ years designing, building, and maintaining automated E2E and API test suites in "
    "TypeScript and Python across fintech, media, and automotive platforms. Owns quality gates end to "
    "end: shift-left test strategy, Playwright/Pytest automation, Docker-containerized environments, "
    "and staged CI/CD pipelines in GitHub Actions, GitLab CI, and Jenkins. Hands-on with AWS and "
    "observability (Grafana, CloudWatch), and building practical AI-assisted testing skills through "
    "public LLM-driven test-generation projects.",
    size=10.2, space_after=4,
)

# ---------------------------------------------------------------------------
# Technical skills
# ---------------------------------------------------------------------------
add_heading("TECHNICAL SKILLS")
skills = [
    ("Test Management", "TestRails, BrowserStack Test Management, Lambda Test, MS Excel, Test Planning, TDD, BDD, Shift-left testing, Regression Testing, Smoke Testing, Exploratory testing, Defect management."),
    ("Test Automation", "Playwright (TypeScript/JavaScript), Cypress, Appium, Pytest, Selenium, Postman/Newman, REST API testing"),
    ("Project Management", "JIRA, Confluence, Agile (Scrum/Kanban), X-RAY, GitLab"),
    ("Languages & Scripting", "TypeScript, JavaScript, Python, JAVA, Bash/Shell, SQL"),
    ("AI-Assisted Testing", "Prompt engineering, AI-generated test cases, Playwright MCP, Playwright CLI, Claude Code, Cursor, GitHub Co-Pilot"),
    ("CI/CD & DevOps", "GitHub Actions, CI/CD, Jenkins, Azure DevOps, Docker."),
    ("Cloud & IaC", "AWS (EC2, S3, IAM, CloudWatch), Terraform and Kubernetes (foundational)"),
    ("Monitoring & Observability", "Grafana, AWS CloudWatch, Flaky-test analysis, DeepEval, Langfuse, LLM tracing, evaluation datasets, quality metrics, latency/token monitoring, AI failure analysis"),
]
for label, val in skills:
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(3.4)
    p.paragraph_format.line_spacing = 1.1
    r1 = p.add_run(f"{label}: ")
    r1.font.bold = True
    r1.font.size = Pt(9.9)
    r1.font.color.rgb = BLACK
    r2 = p.add_run(val)
    r2.font.size = Pt(9.9)
    r2.font.color.rgb = MUTED

# ---------------------------------------------------------------------------
# Work experience
# ---------------------------------------------------------------------------
add_heading("WORK EXPERIENCE")

jobs = [
    ("QA Engineer (SDET)", "DYN Media GmbH, Cologne", "Jul 2024 – Present", [
        "Design, build, and maintain automated E2E (Playwright/TypeScript) and API test suites, enforced quality gates in CI/CD pipelines (GitHub Actions) on every pull request and merge.",
        "Integrated Playwright CLI with AI coding tools (Claude, Cursor) to automate test generation and DOM inspection, cutting script creation time by 35%.",
        "Implemented Playwright MCP server in sandboxed test environments to enable dynamic, prompt-driven UI validation and automated exploratory testing.",
        "Visualized, captured, and diagnosed UI glitches by taking automated screenshots, recording session logs, and checking network traffic during test runs.",
    ]),
    ("System Test Engineer", "Joynext GmbH, Dresden", "Sep 2023 – Feb 2024", [
        "Executed system and integration tests for automotive infotainment firmware on hardware benches and simulators against OEM specifications, catching critical defects before OEM sign-off.",
        "Maintained full requirements traceability matrices so every infotainment module had documented coverage.",
        "Coordinated defect correction with OEM stakeholders and development teams within an agile release cycle.",
        "Performed exploratory testing of new features and complex edge cases; documented defects with reproduction steps and coordinated fixes with developers and product owners.",
    ]),
    ("Test Automation Engineer", "Finoa GmbH, Berlin", "Nov 2022 – Aug 2023", [
        "Built and maintained CI/CD-integrated end-to-end and REST API test automation with parallel execution for a regulated crypto-asset platform, raising QA throughput and cutting flaky failures.",
        "Integrated automated API tests into CI pipelines to detect integration and regression problems early in the development lifecycle.",
        "Kept the automation codebase maintainable through modular design and code review across TypeScript and Python.",
    ]),
    ("Software Tester", "Scoolio GmbH, Dresden", "Jan 2020 – Sep 2022", [
        "Owned QA for Android and iOS apps used by 100k+ students; defined test strategy, test plans, and defect workflows.",
        "Built the Appium mobile automation test suite from scratch, cutting manual regression effort by 40%.",
        "Collaborated with developers and product teams to improve testability and release quality.",
    ]),
    ("Associate System Engineer", "TPS Worldwide, Karachi", "Feb 2017 – Oct 2018", [
        "Supported banks on e-banking and payment-processing incidents, traced transactions across ATM, POS, and internet-banking channels to root cause.",
        "Queried MySQL and Oracle 10g/11g databases using SQL to investigate production incidents.",
    ]),
]

for role, meta, period, points in jobs:
    add_job_line(role, meta, period)
    add_bullets(points)

# ---------------------------------------------------------------------------
# AI-assisted testing projects
# ---------------------------------------------------------------------------
add_heading("AI-ASSISTED TESTING PROJECTS (GITHUB)")

projects = [
    ("AI QA Automation Framework — LLM & RAG Quality Evaluation", "Python | Playwright | Pytest | DeepEval | Langfuse | GitHub Actions", [
        "Built a Playwright + Pytest framework that tests an LLM customer-support assistant through the browser, then layers AI evaluation (DeepEval, RAGAS, Promptfoo) on top to score response relevancy, faithfulness, and retrieval quality.",
        "Wired a CI/CD quality gate into GitHub Actions that blocks a merge when evaluation scores drop below threshold.",
    ]),
    ("Playwright Test Agent — Web & API Suite with Staged CI", "Python | Playwright | Pytest | LLM APIs | GitHub Actions", [
        "Built an AI-assisted test automation workflow combining LLM-based scenario classification with executable Playwright web and API tests.",
        "Designed a staged GitHub Actions pipeline: API → UI smoke → UI full → cross-browser matrix.",
    ]),
    ("Playwright Agents — Autonomous E2E Testing", "TypeScript | Playwright | POM | AI Agents", [
        "Planner/generator/healer agent workflow: agents explore the app, generate executable E2E tests from a Markdown plan, and repair failing tests on a POM fixture architecture.",
    ]),
]
for title, stack, points in projects:
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(5)
    p.paragraph_format.space_after = Pt(0)
    r = p.add_run(title)
    r.font.bold = True
    r.font.size = Pt(10.6)
    r.font.color.rgb = BLACK
    p2 = doc.add_paragraph()
    p2.paragraph_format.space_after = Pt(2)
    r2 = p2.add_run(stack)
    r2.font.size = Pt(8.6)
    r2.font.italic = True
    r2.font.color.rgb = MUTED
    add_bullets(points)

# ---------------------------------------------------------------------------
# Education / Certifications / Languages — two-column layout to save space
# ---------------------------------------------------------------------------
add_heading("EDUCATION")
add_para("M.Sc. coursework, Applied Mathematics — Network & Data Sciences", size=9.9, bold=True, space_after=1)
add_para("Hochschule Mittweida, Germany (90 ECTS completed) · 2018–2024", size=9.3, color=MUTED, space_after=6)
add_para("B.Sc. Computer Science", size=9.9, bold=True, space_after=1)
add_para("Sir Syed University of Engineering & Technology, Karachi, Pakistan · 2012–2016", size=9.3, color=MUTED, space_after=3)

add_heading("CERTIFICATIONS & TRAINING")
add_bullets([
    "DevOps on AWS: Tools for Automated Workflows (LinkedIn Learning)",
    "Intermediate Jenkins: Automate, Integrate, and Secure CI/CD Workflows at Scale (LinkedIn Learning)",
    "Playwright Advanced Automation (Udemy)",
], size=9.8, space_after=3.2)

add_heading("LANGUAGES")
add_para("English: Fluent (full working proficiency)      German: A2 (actively pursuing B1)", size=9.9, space_after=0)

doc.save(OUT)
print(f"Wrote {os.path.abspath(OUT)}")
