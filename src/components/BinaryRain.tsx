import { useEffect, useRef } from 'react'

export default function BinaryRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches) return

    const fontSize = 15
    const columnWidth = 31
    let columns = 0
    let drops: number[] = []
    let frame = 0
    let previousFrame = 0

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.25)
      canvas.width = Math.floor(window.innerWidth * pixelRatio)
      canvas.height = Math.floor(window.innerHeight * pixelRatio)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      columns = Math.ceil(window.innerWidth / columnWidth)
      drops = Array.from({ length: columns }, () => Math.random() * -80)
    }

    const draw = (time: number) => {
      if (document.hidden) {
        frame = 0
        return
      }
      if (time - previousFrame < 42) {
        frame = window.requestAnimationFrame(draw)
        return
      }
      previousFrame = time

      context.fillStyle = 'rgba(3, 7, 9, 0.12)'
      context.fillRect(0, 0, window.innerWidth, window.innerHeight)
      context.font = `${fontSize}px monospace`
      context.textAlign = 'center'

      drops.forEach((drop, column) => {
        const x = column * columnWidth + columnWidth / 2
        const headY = drop * fontSize
        context.fillStyle = 'rgba(169, 255, 246, 0.66)'
        context.fillText(Math.random() > 0.5 ? '1' : '0', x, headY)

        for (let trail = 1; trail <= 5; trail += 1) {
          const y = headY - trail * fontSize
          if (y < 0) continue
          context.fillStyle = `rgba(91, 207, 199, ${0.24 - trail * 0.035})`
          context.fillText(Math.random() > 0.5 ? '1' : '0', x, y)
        }

        drops[column] += 0.16 + Math.random() * 0.28
        if (headY > window.innerHeight + fontSize && Math.random() > 0.975) {
          drops[column] = -Math.random() * 32
        }
      })

      frame = window.requestAnimationFrame(draw)
    }

    const handleVisibility = () => {
      if (document.hidden) {
        window.cancelAnimationFrame(frame)
        frame = 0
      } else if (!frame) {
        frame = window.requestAnimationFrame(draw)
      }
    }

    resize()
    frame = window.requestAnimationFrame(draw)
    window.addEventListener('resize', resize, { passive: true })
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  return <canvas className="binary-rain" ref={canvasRef} aria-hidden="true" />
}