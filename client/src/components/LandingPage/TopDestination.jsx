const TopDestination = () => (
  <div className="w-full min-h-screen">
    <div className="flex flex-row sm:space-x-10 py-10 justify-center w-full">
      <div className="border-b border-b-2 border-b-gray-900 h-[15px] sm:h-[20px] w-[100px] sm:w-[300px]" />
      <h1 className={"text-xl sm:text-5xl text-center"}> Top Destination </h1>
      <div
        className={
          "border-b border-b-2 border-b-gray-900 h-[15px] sm:h-[20px] w-[100px] sm:w-[300px]"
        }
      />
    </div>
    <div className={"grid grid-cols-12 lg:px-20"}>
      <div className="col-span-12 lg:col-span-6 paris flex justify-center items-center h-[440px] bg-center bg-cover">
        <h2 className="text-4xl text-center font-[500] text-white">
          PARIS . FRANCE
        </h2>
      </div>
      <div className="col-span-12 lg:col-span-6 burma flex justify-center items-center h-[440px] bg-center bg-cover">
        <h2 className="text-4xl text-center font-[500] text-white">
          BEGAN . MYANMAR
        </h2>
      </div>
      <div className="col-span-12 flex justify-center items-center lg:col-span-4 siyun h-[440px] bg-center bg-cover">
        <h2 className="text-4xl text-center font-[500] text-white">
          SHANGHAI . CHINA
        </h2>
      </div>
      <div className="col-span-12 flex justify-center items-center lg:col-span-4 Canada h-[440px] bg-center bg-cover">
        <h2 className="text-4xl text-center font-[500] text-white">
          BANFF . CANADA
        </h2>
      </div>
      <div className="col-span-12 flex justify-center items-center lg:col-span-4 norway h-[440px] bg-center bg-cover">
        <h2 className="text-4xl text-center font-[500] text-white">
          OSLO . NORWAY
        </h2>
      </div>
    </div>
    <div className="py-10 w-full flex justify-center">
      <button className="text-white px-2 py-2 bg-gray-500 rounded">
        I want to explore more
      </button>
    </div>
  </div>
);

export default TopDestination;
