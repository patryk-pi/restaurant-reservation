import Link from "next/link";
import NavBar from "../../components/NavBar";
import ReserveHeader from "./components/ReserveHeader";
import ReserveForm from "./components/ReserveForm";

const ReservationPage = () => {
    return (
        <main className="bg-gray-100 min-h-screen w-screen">
            <main className="max-w-screen-2xl m-auto bg-white">
                <NavBar/>
                <div className="border-t h-screen">
                    <div className="py-9 w-3/5 m-auto">
                        <ReserveHeader/>
                        {/* FORM */}
                        <ReserveForm />
                    </div>
                </div>
            </main>
        </main>

    )
}

export default ReservationPage