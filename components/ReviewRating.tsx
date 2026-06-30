'use client'

export const ReviewRating = ({
    endorsementText,
    rating,
    ratingTotal = 5,
}: {
    endorsementText: string,
    rating: number,
    ratingTotal?: number,
}) => {
    // Constant defining color codes
    const starFontSize = "25px";
    const starOnColor = "#0d1117";
    const starOffColor = "#bac2cc";
    const endorsementTextColor = starOnColor;

    return (
        <div>
            <div>
                <span style={{ color: endorsementTextColor }}>
                    "{endorsementText}"
                </span>
            </div>
            <div>
                {
                    Array.from({ length: rating }).map((_, index) => (
                        <span key={`on_${index}`} style={{ fontSize: starFontSize, color: starOnColor }}>★</span>
                    ))
                }
                {
                    Array.from({ length: ratingTotal - rating }).map((_, index) => (
                        <span key={`off_${index}`} style={{ fontSize: starFontSize, color: starOffColor }}>☆</span>
                    ))
                }
            </div>
        </div>
    )
}