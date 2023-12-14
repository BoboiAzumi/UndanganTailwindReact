/* eslint-disable react/no-unescaped-entities */
import React from "react"

class App extends React.Component{
    constructor(props){
        super(props)
        this.props = props
        this.state = {
            // eslint-disable-next-line react/prop-types
            nama : this.props.nama
        }
    }
    render(){
        return (
        <>
            <div className="invitation-border">
                <div className="flex align-middle place-items-center justify-center">
                    <div className="bingkai-border flex align-middle place-items-center justify-center">
                        <img src="/bride.jpg" className="rounded-full foto"></img>
                    </div>
                </div>
                <div className="flex align-middle place-items-center justify-center">
                    <h1>Minggu, 31/12/2023</h1>
                </div>
                <div className="flex align-middle flex-col place-items-center justify-center mt-2">
                    <div className="font-['latin'] text-3xl font-bold">
                        King & Queen
                    </div>
                    <div className="font-serif mt-6">
                        <h1 className="text-xl text-bold">Kepada :</h1>
                    </div>
                    <div className="font-mono max-w-lg text-center">
                        <h1 className="text-xl">
                            {this.state.nama}
                        </h1>
                    </div>
                </div>
            </div>
            <div className="invitation-border">
                <div className="flex align-middle flex-col place-items-center justify-center text-center min-h-screen">
                    <div className="max-w-xs sm:max-w-lg">
                        <p className="font-serif text-lg sm:text-xl">
                            Bismillahirrahmanirrahim
                        </p>
                        <p className="font-serif text-lg sm:text-xl">
                            Assalamu’alaikum Warahmatullahi Wabarakatuh
                        </p>
                        <p className="font-serif text-lg sm:text-xl"><br></br>
                            Dengan memohon Ridho dan Rahmat Allah SWT,kami mengharapkan kehadiran Bapak/Ibu/Saudara/i pada acara pernikahan putra dan putri kami
                        </p>
                    </div>
                </div>
            </div>
            <div className="invitation-border">
                <div className="flex align-middle flex-col place-items-center justify-center text-center min-h-screen">
                    <div className="max-w-xs sm:max-w-lg">
                        <p className="font-serif text-lg sm:text-xl font-bold">
                            King
                        </p>
                        <p className="font-serif text-lg sm:text-xl">
                            Putra dari Bapak H. King's Father dan Ibu Hj. King's Mother
                        </p>
                        <p className="font-serif text-lg sm:text-xl font-bold">
                            Queen
                        </p>
                        <p className="font-serif text-lg sm:text-xl">
                            Putra dari Bapak H. Queen's Father dan Ibu Hj. Queen's Mother
                        </p>
                        <p className="font-serif text-lg sm:text-xl mt-3">
                            Yang Insya Allah akan dilaksanakan pada :
                        </p>
                        <p className="font-serif text-lg sm:text-xl font-bold">
                            Akad Nikah
                        </p>
                        <p className="font-serif text-lg sm:text-xl">
                            Minggu, 31/12/2023
                        </p>
                        <p className="font-serif text-lg sm:text-xl">
                            Pukul : 08:00 WIB
                        </p>
                        <p className="font-serif text-lg sm:text-xl mt-3">
                            Bertempat di :
                        </p>
                        <p className="font-serif text-lg sm:text-xl">
                            Hotel King's Palace
                        </p>
                    </div>
                </div>
            </div>
            <div className="invitation-border">
                <div className="flex align-middle flex-col place-items-center justify-center text-center min-h-screen">
                    <div className="max-w-xs sm:max-w-lg">
                        <p className="font-serif text-lg sm:text-xl">
                            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai.
                        </p>
                        <p className="font-serif text-lg sm:text-xl">
                            Atas kehadiran dan doa restunya, kami mengucapkan terima kasih Wassalamu’alaikum Warahmatullahi Wabarakatuh
                        </p>
                        <p className="font-serif text-lg sm:text-xl"><br></br>
                            Kami yang berbahagia, King & Queen
                        </p>
                    </div>
                </div>
            </div>
            <div className="invitation-border">
                <div className="flex align-middle flex-col place-items-center justify-center text-center min-h-screen">
                    <div className="max-w-xs sm:max-w-lg ">
                        <h1 className="font-bold">Lokasi</h1>
                        <div className="hidden sm:block">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127504.54111953752!2d98.98109081517812!3d2.953961845573994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031845bc37532f9%3A0x8538114693d8a805!2sKota%20Pematang%20Siantar%2C%20Sumatera%20Utara!5e0!3m2!1sid!2sid!4v1701689958790!5m2!1sid!2sid" width="450px" height="450px" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="block sm:hidden">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127504.54111953752!2d98.98109081517812!3d2.953961845573994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031845bc37532f9%3A0x8538114693d8a805!2sKota%20Pematang%20Siantar%2C%20Sumatera%20Utara!5e0!3m2!1sid!2sid!4v1701689958790!5m2!1sid!2sid" width="250px" height="450px" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div> 
                    </div>
                </div>
            </div>
        </>    
        )
    }
}

export default App