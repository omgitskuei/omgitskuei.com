import { Breadcrumbs } from "@/components/Breadcrumbs";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    // Constants
    const gameTileSize = 200;

    return (
        <>
            <Breadcrumbs separator="/"></Breadcrumbs>
            <h1>React</h1>
            <Link href={"/professional/projects/react/components"}>
                {"Components"}
            </Link>
            <Link href={"/professional/projects/react/webapps"}>
                {"Web Apps"}
            </Link>
        </>
    );
}
