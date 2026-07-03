'use client'

export const ReviewRating = ({
    analysis,
    rating,
    ratingTotal = 5,
}: {
    analysis: string,
    rating: number,
    ratingTotal?: number,
}) => {
    // Constant defining color codes
    const starFontSize = "25px";
    const starOnColor = "#0d1117";
    const starOffColor = "#bac2cc";
    const textColor = starOnColor;

    return (
        <div>

            {/* Review text */}
            <span style={{ color: textColor }}>
                "{analysis}" - Kuei
            </span>

            <div>
                {/* Stars */}
                <span style={{
                    marginRight: "5px"
                }}>
                    Rating:
                </span>
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