
import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import styles from './ScrollReveal.module.css'

interface ScrollRevealProps {
    children: ReactNode
    delay?: number
    className?: string
}

function ScrollReveal({
    children,
    delay = 0,
    className = '',
}: ScrollRevealProps) {
    const elementRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = elementRef.current

        if (!element) return

        const mediaQuery = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        )

        if (mediaQuery.matches) {
            setIsVisible(true)
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -40px 0px',
            }
        )

        observer.observe(element)

        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={elementRef}
            className={`${styles.reveal} ${isVisible ? styles.visible : ''
                } ${className}`}
            style={{
                transitionDelay: isVisible ? `${delay}ms` : '0ms',
            }}
        >
            {children}
        </div>
    )
}

export default ScrollReveal
