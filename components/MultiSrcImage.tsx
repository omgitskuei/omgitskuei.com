// 'use client'

export const MultiSrcImage = ({
    multisizeSrc,
    avifSrc,
    webpSrc,
    hiresSrc,
    fallbackSrc
}: {
    multisizeSrc?: {
        smallSrc: string,
        mediumSrc: string,
        largeSrc: string,
        fileType: string,
        maxWidthPx: number,
    }
    avifSrc?: string,
    webpSrc?: string,
    hiresSrc?: string,
    fallbackSrc: string
}) => {
    return (
        <picture>
            {/* For different sizes */}
            {
                multisizeSrc ?
                    <source
                        srcSet={`"${multisizeSrc.smallSrc} 480w, ${multisizeSrc.mediumSrc} 800w, ${multisizeSrc.largeSrc} 1200w"`}
                        sizes={`(max-width: ${multisizeSrc}px}) 400px, 800px`}
                        type={multisizeSrc.fileType} />
                    :
                    <></>
            }
            {/* For file format avif */}
            {
                avifSrc ?
                    <source srcSet={avifSrc} type="image/avif" />
                    :
                    <></>
            }
            {/* For file format webp */}
            {
                webpSrc ?
                    <source srcSet={webpSrc} type="image/webp" />
                    :
                    <></>
            }
            {/* High density resolution image */}
            {
                hiresSrc ?
                    <source srcSet={`${fallbackSrc}, ${hiresSrc} 1.5x`} />
                    :
                    <></>
            }
            {/* Fallback */}
            <img src={fallbackSrc} alt="Example image" />
        </picture>
    )
}