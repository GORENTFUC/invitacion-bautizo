# Genera los íconos y la imagen para compartir (Open Graph) a partir de public/favicon.png.
# Uso (desde la raíz del proyecto):  powershell -ExecutionPolicy Bypass -File scripts/generate-social-images.ps1
# Requiere Windows (System.Drawing) y las fuentes Palatino Linotype y Segoe UI.

Add-Type -AssemblyName System.Drawing

$publicDir = Join-Path $PSScriptRoot '..\public' | Resolve-Path
$source = [System.Drawing.Image]::FromFile((Join-Path $publicDir 'favicon.png'))

# Paleta oficial (debe coincidir con src/styles/tokens.css)
$cream = [System.Drawing.ColorTranslator]::FromHtml('#F2EDEB')
$sandSoft = [System.Drawing.ColorTranslator]::FromHtml('#E8DDD7')
$gold = [System.Drawing.ColorTranslator]::FromHtml('#BFA980')
$rose = [System.Drawing.ColorTranslator]::FromHtml('#8C4250')
$umber = [System.Drawing.ColorTranslator]::FromHtml('#591E11')
$umberMuted = [System.Drawing.ColorTranslator]::FromHtml('#7A4C41')

function New-Canvas([int]$width, [int]$height) {
  $bitmap = New-Object System.Drawing.Bitmap $width, $height
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.SmoothingMode = 'AntiAlias'
  $graphics.InterpolationMode = 'HighQualityBicubic'
  $graphics.PixelOffsetMode = 'HighQuality'
  $graphics.TextRenderingHint = 'AntiAliasGridFit'
  return @($bitmap, $graphics)
}

function Save-Icon([int]$size, [string]$fileName, $background) {
  $bitmap, $graphics = New-Canvas $size $size
  if ($background) { $graphics.Clear($background) }
  $graphics.DrawImage($source, 0, 0, $size, $size)
  $bitmap.Save((Join-Path $publicDir $fileName), [System.Drawing.Imaging.ImageFormat]::Png)
  $graphics.Dispose(); $bitmap.Dispose()
}

Save-Icon 32 'favicon-32x32.png' $null
Save-Icon 180 'apple-touch-icon.png' $cream

# ---------- Imagen Open Graph 1200 x 630 ----------
$width = 1200
$height = 630
$bitmap, $g = New-Canvas $width $height
$g.Clear($cream)

$g.FillEllipse((New-Object System.Drawing.SolidBrush $sandSoft), 40, 55, 520, 520)
$g.DrawImage($source, 60, 75, 480, 480)

$goldPen = New-Object System.Drawing.Pen $gold, 1.5
$g.DrawRectangle($goldPen, 24, 24, $width - 48, $height - 48)

$center = New-Object System.Drawing.StringFormat
$center.Alignment = 'Center'

function Write-Line([string]$text, $font, $color, [float]$y, [float]$lineHeight) {
  $rect = New-Object System.Drawing.RectangleF 560, $y, 580, $lineHeight
  $g.DrawString($text, $font, (New-Object System.Drawing.SolidBrush $color), $rect, $center)
}

function Add-Tracking([string]$text) {
  return (($text.ToCharArray() | ForEach-Object { if ($_ -eq ' ') { '  ' } else { $_ } }) -join [char]0x2009)
}

$italic = [System.Drawing.FontStyle]::Italic
Write-Line 'Con inmensa alegría te invitamos al' (New-Object System.Drawing.Font 'Palatino Linotype', 26, $italic, 'Pixel') $umberMuted 170 40
Write-Line (Add-Tracking 'BAUTIZO Y PRIMER AÑO DE VIDA DE') (New-Object System.Drawing.Font 'Segoe UI Semibold', 17, 'Regular', 'Pixel') $rose 220 30
Write-Line 'María Isabel' (New-Object System.Drawing.Font 'Palatino Linotype', 88, $italic, 'Pixel') $umber 258 120

# Separador: línea - rombo - línea
$dividerY = 402
$g.DrawLine($goldPen, 735, $dividerY, 825, $dividerY)
$g.DrawLine($goldPen, 875, $dividerY, 965, $dividerY)
$diamond = [System.Drawing.PointF[]]@(
  (New-Object System.Drawing.PointF 850, ($dividerY - 9)),
  (New-Object System.Drawing.PointF 859, $dividerY),
  (New-Object System.Drawing.PointF 850, ($dividerY + 9)),
  (New-Object System.Drawing.PointF 841, $dividerY)
)
$g.DrawPolygon($goldPen, $diamond)

Write-Line 'Domingo 1 de noviembre de 2026' (New-Object System.Drawing.Font 'Palatino Linotype', 34, 'Regular', 'Pixel') $umber 430 50
Write-Line (Add-Tracking 'GARZÓN, HUILA') (New-Object System.Drawing.Font 'Segoe UI', 17, 'Regular', 'Pixel') $umberMuted 492 30

$bitmap.Save((Join-Path $publicDir 'og-image.png'), [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose(); $bitmap.Dispose(); $source.Dispose()

Write-Output 'Generados: favicon-32x32.png, apple-touch-icon.png, og-image.png'
