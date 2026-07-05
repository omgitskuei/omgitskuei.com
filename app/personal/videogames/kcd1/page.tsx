'use client'

// import styles from "./page.module.css";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Keypress } from "@/components/Keypress";
// import Image from "next/image";

export default function Page() {



    return (
        <section style={{ width: "960px" }}>
            <Breadcrumbs items={[
                {
                    label: "Personal",
                    href: "/personal"
                },
                {
                    label: "Video Games",
                    href: "/personal/videogames"
                },
                {
                    label: "Kingdom Come: Deliverance",
                    href: "/personal/videogames/kcd1"
                }
            ]}>
            </Breadcrumbs>
            <section style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {/* The Good, Bad, Weird */}
                <section>
                    <h2>The Good, Bad, and Weird</h2>
                    <h3>The Good</h3>

                    <h3>The Bad</h3>

                    <h3>The Weird</h3>
                </section>

                {/* Improvements */}
                <section>
                    <h2>Improvements</h2>
                </section>

                {/* Gallery */}
                <section>
                    <h2>Gallery</h2>
                </section>

                {/* Highlights */}
                <section>
                    <h2>Highlights</h2>

                    <div>
                        <p>
                            Henry enrolls in a longsword tournament to prove his skill and gain recognition.
                            The video showcases strategic timing of perfect block, riposte, quick in-and-out jabs, clinching,
                            and shoving the opponent into arena fences to disorient them followed-up with a free hit.
                        </p>
                        <div>
                            <div>
                                <button onClick={() => {
                                    var a = document.getElementById('kcd1_longsword_tourney_480p') as HTMLVideoElement;
                                    if (a) {
                                        a.currentTime = 90;
                                    }
                                }}>
                                    1:30
                                </button>
                                <span>Pressing Block <Keypress label="Q"></Keypress> immediately as the green shield icon appears, regardless of where your weapon is oriented on the compass, will trigger a Perfect Block. A perfect block prevents damage but doesn't cost stamina like a regular block.</span>
                            </div>

                        </div>
                        <video id="kcd1_longsword_tourney_480p" controls width="100%" disablePictureInPicture
                            poster="/personal/videogames/kcd1/kcd1_longsword_tourney_480p.jpg">
                            <source src="/personal/videogames/kcd1/kcd1_longsword_tourney_480p.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <a href="/personal/videogames/kcd1/kcd1_longsword_tourney_480p.mp4"
                            type="video/mp4"
                            download="omgitskuei_kcd1_longsword_tourney_480p.mp4">
                            Download as MP4
                        </a>
                    </div>

                </section>




            </section>
        </section>
    );
}
