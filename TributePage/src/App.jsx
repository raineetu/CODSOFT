export default function App() {
  return (
    <>
      {/* Image Section */}
      <div className="md:h-[58vh] h-[65vh]">
        <div
          className="text-center h-[32vh] bg-cover bg-center text-white relative md:h-[32vh]"
          style={{ backgroundImage: "url('/kathmandu.png')" }}
        >
          <div className="flex flex-col items-center md:flex-row md:space-x-4 absolute top-[75%] left-[5%] md:left-[14%] ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz9q1v8NPNMjshZFlvppJV4ovxXjyZDrK7svFfgVbQvB_6bQi8u94C0ze6M5rssyM2V2M&usqp=CAU"
              alt="King Birendra Bir Bikram Shah"
              className="w-[25vh] h-[25vh] md:w-[35vh] md:h-[35vh] border-4 border-white mb-4 md:mb-0"
            />
            <div className="text-center md:text-left mt-4 md:mt-0">
              <h1 className="text-xl md:text-2xl font-serif text-black">
                King Birendra Bir Bikram Shah
              </h1>
              <h2 className="text-lg md:text-xl font-serif text-black pt-2">
                Baisakh 14, 2002 B.S. - Jestha 19, 2058 B.S.
              </h2>
              <h2 className="text-lg font-serif text-black pt-2">
                Narayanhiti Royal Palace, Kathmandu, Nepal
              </h2>
            </div>
          </div>
        </div>

        {/* Section */}
        <div className="w-full h-screen bg-gray-100 md:mt-[1vh] mt-[7vh]">
          <div className="w-full">
            <p className="text-right mr-[2vh] md:mr-[12vh] pt-[25vh] font-serif text-xl font-semibold">
              "Nepal is a zone of peace."
              <br /> - King Birendra Bikram Shah
            </p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <section className="mt-14 border-2 border-gray-200 rounded-[2vh] shadow-lg m-4 p-4 bg-gray-100">
        <h2 className="text-3xl md:text-4xl text-center font-serif text-black flex items-center justify-center gap-2 md:gap-4">
          <img
            src="/nepalpng.png"
            alt="Nepal Flag"
            className="w-[5vh] h-[5vh] md:w-[8vh] md:h-[8vh]"
          />
          Achievements
          <img
            src="/nepalpng.png"
            alt="Nepal Flag"
            className="w-[5vh] h-[5vh] md:w-[8vh] md:h-[8vh]"
          />
        </h2>

        {/* Achievements */}
        <div
          className="flex flex-col items-center justify-center space-y-4 mt-8"
          style={{
            backgroundImage: "url('/emnepal.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "auto",
            width: "100%",
          }}
        >
          <div className="w-[90%] md:w-[35%] border-2 border-gray-200 rounded-lg shadow-lg p-4 self-start bg-gray-100">
            <p className="font-serif">
              In 1975, during his coronation speech, King Birendra proposed
              Nepal as a Zone of Peace. His vision aimed to keep Nepal neutral
              and non-aligned amidst global geopolitical tensions. By 1990, 116
              countries supported this proposal, although it was not officially
              adopted due to regional complexities.
            </p>
          </div>
          <div className="w-[90%] md:w-[35%] border-2 border-gray-200 rounded-lg shadow-lg p-4 self-end bg-gray-100">
            <p className="font-serif">
              King Birendra played a crucial role in transitioning Nepal to the
              1990 Constitution of Nepal, which introduced a multiparty
              parliamentary system while retaining the monarchy's ceremonial
              role.
            </p>
          </div>
          <div className="w-[90%] md:w-[35%] border-2 border-gray-200 rounded-lg shadow-lg p-4 self-start bg-gray-100">
            <p className="font-serif">
              During his reign, Nepal faced several natural disasters, including
              floods and landslides. King Birendra actively engaged in relief
              efforts, often visiting affected areas to show support and
              mobilize resources for recovery.
            </p>
          </div>
          <div className="w-[90%] md:w-[35%] border-2 border-gray-200 rounded-lg shadow-lg p-4 self-end bg-gray-100">
            <p className="font-serif">
              To encourage local development, King Birendra introduced policies
              for the decentralization of power, allowing local governments more
              authority in decision-making and resource allocation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
