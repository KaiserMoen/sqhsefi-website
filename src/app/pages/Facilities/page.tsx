import Carousel from "./Carousel";
export default function Facilities() {
    return (
        <main id="facilities_page">
            <div className="p-4 m-5 text-[rgb(2,50,122)] relative shadow-md shadow-[rgb(2,50,122)]  ">
                
                <div className=" flex flex-col justify-between items-center md:flex-row  min-h-[200px] ">

                    <div className="flex justify-center text-center items-center m-2">
                        <h1 className="text-3xl font-bold md:ml-20">HERE IS OUR FACILITIES</h1>
                    </div>

                    <p className="text-center md:text-left m-2 w-[60%]">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore labore saepe obcaecati consectetur ipsam deleniti sed sunt voluptas asperiores accusantium. Voluptas reiciendis maxime repellat ipsam dolorem commodi soluta incidunt delectus.
                    </p>
                </div>
                <Carousel />
            </div>
        </main>
    );
}