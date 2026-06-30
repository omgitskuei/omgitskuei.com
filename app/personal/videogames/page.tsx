import Link from "next/link";
import styles from "./page.module.css";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ReviewRating } from "@/components/ReviewRating";

export default function Page() {
    return (
        <section style={{ width: "960px" }}>
            <Breadcrumbs></Breadcrumbs>
            <section style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {/* Game */}
                <div>
                    GAME NAME
                </div>
                {/* Review */}
                <div>
                    {/* REVIEW */}
                    <ReviewRating endorsementText={"It was ok"} rating={3}></ReviewRating>
                </div>
                {/* Gallery */}
                <div>
                    GALLERY
                </div>
                {/* Highlights */}
                <div>
                    HIGHLIGHTS
                </div>
            </section>
        </section>
    );
}
