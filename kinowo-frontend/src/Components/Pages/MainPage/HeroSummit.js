const HeroSummit = () => {
    return (
      <div class="grid grid-cols-3 h-max text-white ">
        <div class="card justify-items-center">
          <h2 class="card-title ">
            <span className="underline decoration-main-red underline-offset-8 ">
              Kultowe Filmy
            </span>
          </h2>
          <p className="w-1/2 invisible sm:visible">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nihil
            distinctio delectes
          </p>
        </div>
        <div class="card">
          <h2 class="card-title">
            <span className="underline decoration-main-red underline-offset-8 ">
              Kultowe miejsca
            </span>
          </h2>
          <p className=" lg:w-2/4 invisible sm:visible">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
            facere.
          </p>
        </div>
        <div class="card">
          <h2 class="card-title">
            <span className="underline decoration-main-red underline-offset-8 ">
              Spędzony czas razem
            </span>
          </h2>
          <p className=" lg:w-2/4 invisible sm:visible">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            delectes et nihil.
          </p>
        </div>
      </div>
    );
  };
  
  export default HeroSummit;
  