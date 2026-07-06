from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor, black, white, Color
from reportlab.pdfgen import canvas
import os

# Phone-like 2:3 vertical ratio
WIDTH = 390
HEIGHT = 585
PAD = 12
CARD_W = WIDTH - PAD * 2
CARD_H = HEIGHT - PAD * 2
CARD_X = PAD
CARD_Y = PAD
RADIUS = 16

BG = HexColor("#F2F2F7")
CARD_BG = white
BORDER = HexColor("#D1D1D6")
LIGHT_GRAY = HexColor("#8E8E93")
BLACK_TEXT = HexColor("#1C1C1E")

output_path = os.path.join(os.path.dirname(__file__), "ConcertTicket.pdf")
c = canvas.Canvas(output_path, pagesize=(WIDTH, HEIGHT))

# Background
c.setFillColor(BG)
c.rect(0, 0, WIDTH, HEIGHT, fill=1, stroke=0)

# Card shadow
for i in range(4):
    sh = 2 - i * 0.4
    c.setFillColor(Color(0, 0, 0, 0.06 - i * 0.012))
    c.roundRect(CARD_X - sh, CARD_Y - sh, CARD_W + sh * 2, CARD_H + sh * 2, RADIUS + 1, fill=1, stroke=0)

# Card
c.setFillColor(CARD_BG)
c.roundRect(CARD_X, CARD_Y, CARD_W, CARD_H, RADIUS, fill=1, stroke=0)
c.setStrokeColor(BORDER)
c.setLineWidth(0.5)
c.roundRect(CARD_X, CARD_Y, CARD_W, CARD_H, RADIUS, fill=0, stroke=1)

# === HERO (top 35%) ===
hero_h = CARD_H * 0.35
hero_x = CARD_X
hero_y = CARD_Y + CARD_H - hero_h
hero_r = RADIUS

# Clip for top rounded corners
c.saveState()
p = c.beginPath()
p.moveTo(hero_x, hero_y + hero_h)
p.lineTo(hero_x, hero_y + hero_r)
p.arcTo(hero_x, hero_y, hero_x + hero_r * 2, hero_y + hero_r * 2, 180, -90)
p.lineTo(hero_x + CARD_W - hero_r, hero_y)
p.arcTo(hero_x + CARD_W - hero_r * 2, hero_y, hero_x + CARD_W, hero_y + hero_r * 2, 90, -90)
p.lineTo(hero_x + CARD_W, hero_y + hero_h)
p.close()
c.clipPath(p, fill=0, stroke=0)

# Gradient background
for i in range(40):
    t = i / 40
    r = 0.10 + t * 0.04
    g = 0.10 + t * 0.03
    b = 0.18 + t * 0.05
    c.setFillColor(Color(r, g, b))
    y_pos = hero_y + hero_h - (t * hero_h)
    c.rect(hero_x, y_pos, CARD_W, hero_h / 40 + 1, fill=1, stroke=0)

# Stage floor line
c.setStrokeColor(Color(0.3, 0.3, 0.5, 0.25))
c.setLineWidth(0.5)
c.line(hero_x + 12, hero_y + hero_h * 0.12, hero_x + CARD_W - 12, hero_y + hero_h * 0.12)

# Performer silhouette
cx = hero_x + CARD_W / 2
c.setFillColor(Color(0.0, 0.0, 0.0, 0.82))
# Head
head_r = 8
c.circle(cx, hero_y + hero_h * 0.38, head_r, fill=1, stroke=0)
# Body
bt = hero_y + hero_h * 0.38 - head_r - 3
bb = bt - 32
bwt = 14
bwb = 26
p = c.beginPath()
p.moveTo(cx - bwt / 2, bt)
p.lineTo(cx + bwt / 2, bt)
p.lineTo(cx + bwb / 2, bb)
p.lineTo(cx - bwb / 2, bb)
p.close()
c.drawPath(p, fill=1, stroke=0)
# Arms
c.setStrokeColor(Color(0.0, 0.0, 0.0, 0.82))
c.setLineWidth(4)
c.line(cx - bwt / 2, bt - 2, cx - 32, bb + 12)
c.line(cx + bwt / 2, bt - 2, cx + 32, bb + 12)

# Spotlight glow
c.setFillColor(Color(1, 1, 1, 0.04))
c.circle(cx, hero_y + hero_h + 30, 50, fill=1, stroke=0)
c.setFillColor(Color(1, 1, 1, 0.02))
c.circle(cx, hero_y + hero_h + 30, 75, fill=1, stroke=0)

# "NIGHT" logo with glow
logo = "NIGHT"
logo_sz = 30
logo_y_pos = hero_y + hero_h * 0.58
for gi in range(6):
    c.setFillColor(Color(1, 1, 1, 0.12 - gi * 0.016))
    c.setFont("Helvetica-Bold", logo_sz + gi * 0.5)
    c.drawCentredString(cx, logo_y_pos - gi * 0.4, logo)
c.setFillColor(white)
c.setFont("Helvetica-Bold", logo_sz)
c.drawCentredString(cx, logo_y_pos, logo)

# "★ LIVE IN CONCERT ★" subtitle
c.setFillColor(Color(1, 0.6, 0, 0.9))
c.setFont("Helvetica-Bold", 7)
c.drawCentredString(cx, logo_y_pos - logo_sz - 3, "\u2605 LIVE IN CONCERT \u2605")

# Sparkles
import random
random.seed(42)
for _ in range(25):
    sx = hero_x + random.random() * CARD_W
    sy = hero_y + random.random() * hero_h * 0.25
    c.setFillColor(Color(1, 1, 0.7, random.random() * 0.25 + 0.05))
    c.circle(sx, sy, random.random() * 1.2 + 0.4, fill=1, stroke=0)
for _ in range(50):
    ax = hero_x + random.random() * CARD_W
    ay = hero_y + random.random() * hero_h * 0.1
    c.setFillColor(Color(0.8, 0.8, 1, 0.12))
    c.circle(ax, ay, 0.6, fill=1, stroke=0)

c.restoreState()

# === Event Title ===
t_y = hero_y - 14
c.setFillColor(BLACK_TEXT)
c.setFont("Helvetica-Bold", 11)
c.drawCentredString(cx, t_y, "NIGHT FALL FESTIVAL 2026")
c.setFillColor(LIGHT_GRAY)
c.setFont("Helvetica", 6)
c.drawCentredString(cx, t_y - 9, "Live From Jakarta")

# === Dotted Divider ===
div_y = t_y - 22
c.setStrokeColor(BORDER)
c.setLineWidth(0.6)
c.setDash(2, 3)
c.line(CARD_X + 16, div_y, CARD_X + CARD_W - 16, div_y)
c.setDash()

# === Info Section ===
info_y = div_y - 16
col1_x = CARD_X + 16
col_w = CARD_W / 2 - 10

def draw_info(label, value, x, y):
    c.setFillColor(LIGHT_GRAY)
    c.setFont("Helvetica", 4.5)
    c.drawString(x, y + 5, label)
    c.setFillColor(BLACK_TEXT)
    c.setFont("Helvetica-Bold", 6.5)
    c.drawString(x, y, value)

draw_info("Date", "9 Jan, 2026", col1_x, info_y)
draw_info("Time", "19.00 WIB", col1_x + col_w, info_y)

info_y2 = info_y - 18
draw_info("Venue", "Gor Purwokerto", col1_x, info_y2)
draw_info("Category", "Festival", col1_x + col_w, info_y2)

# === QR Code ===
qr_bot = info_y2 - 22
qr_size = 52
qr_x = cx - qr_size / 2
qr_y = qr_bot - qr_size

# White pad
c.setFillColor(white)
c.roundRect(qr_x - 8, qr_y - 8, qr_size + 16, qr_size + 16, 4, fill=1, stroke=0)

def draw_qr(c, x, y, size, data):
    mods = 21
    cell = size / mods
    import hashlib
    h = hashlib.md5(data.encode()).hexdigest()
    bits = bin(int(h, 16))[2:].zfill(128)
    for row in range(mods):
        for col in range(mods):
            is_top_left = row < 7 and col < 7
            is_top_right = row < 7 and col >= mods - 7
            is_bot_left = row >= mods - 7 and col < 7
            is_finder = is_top_left or is_top_right or is_bot_left
            if is_finder:
                inner = (2 <= row < 5 and 2 <= col < 5) or \
                        (2 <= row < 5 and col >= mods - 5 and col < mods - 2) or \
                        (row >= mods - 5 and row < mods - 2 and 2 <= col < 5)
                center = (row == 3 and col == 3) or \
                         (row == 3 and col == mods - 4) or \
                         (row == mods - 4 and col == 3)
                if center or \
                   (row in (0, 6) and col <= 6) or \
                   (col in (0, 6) and row <= 6) or \
                   (row in (0, 6) and col >= mods - 7) or \
                   (col in (mods - 1, mods - 7) and row < 7) or \
                   (row in (mods - 1, mods - 7) and col < 7) or \
                   (col in (0, 6) and row >= mods - 7):
                    c.setFillColor(black)
                elif inner:
                    c.setFillColor(white)
                else:
                    c.setFillColor(white)
            elif row == 6 or col == 6:
                c.setFillColor(black if (row + col) % 2 == 0 else white)
            else:
                idx = (row * mods + col) % len(bits)
                c.setFillColor(black if bits[idx] == '1' else white)
            cx_qr = x + col * cell
            cy_qr = y + (mods - 1 - row) * cell
            c.rect(cx_qr, cy_qr, cell, cell, fill=1, stroke=0)

draw_qr(c, qr_x, qr_y, qr_size, "NIGHTFALL2026-JKT-FESTIVAL")

# Scan text
c.setFillColor(LIGHT_GRAY)
c.setFont("Helvetica", 3.5)
c.drawCentredString(cx, qr_y - 9, "Scan for entry")

# === Ticket Cut-outs ===
cut_r = 6
cut_cy = qr_y + qr_size / 2
for side_x in (CARD_X, CARD_X + CARD_W):
    c.setFillColor(BG)
    c.circle(side_x, cut_cy, cut_r, fill=1, stroke=0)
    dir_offset = 1 if side_x == CARD_X else -1
    # compensate
    if side_x == CARD_X:
        c.setFillColor(CARD_BG)
        c.rect(side_x, cut_cy - cut_r, cut_r, cut_r * 2, fill=1, stroke=0)
    else:
        c.setFillColor(CARD_BG)
        c.rect(side_x - cut_r, cut_cy - cut_r, cut_r, cut_r * 2, fill=1, stroke=0)

# Side decorations
c.setFillColor(BORDER)
for i in range(3):
    dy = t_y + 6 - i * 5
    c.circle(CARD_X + 8, dy, 0.8, fill=1, stroke=0)
    c.circle(CARD_X + CARD_W - 8, dy, 0.8, fill=1, stroke=0)

c.save()

print(f"Concert ticket PDF created: {output_path}")
w_in = WIDTH / 72
h_in = HEIGHT / 72
print(f"Dimensions: {WIDTH}pt x {HEIGHT}pt ({w_in:.1f}in x {h_in:.1f}in)")
