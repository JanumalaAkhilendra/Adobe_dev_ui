import { useState } from "react";

function App() {
  const [page, setPage] = useState(1);
  const totalPages = 5;

  const goPrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const goNext = () => {
    if (page < totalPages) setPage(page + 1);
  };
  const goHome = () => {
    setPage(1);
  };
  const CreateAccount = () => {
    setPage(3);
  };
  const SignIn = () => {
    setPage(2);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white gap-4 font-sans px-4">

      <div className="w-full max-w-sm bg-gray-50 shadow-md rounded-lg p-4 flex flex-col justify-start overflow-hidden min-h-[600px]">


        {page === 1 && (
          <div className="relative flex flex-col justify-end h-full min-h-[500px]">

            <div className="flex justify-end mt-4">

            </div>


            <div className=" flex flex-col items-start justify-end text-center h-full px-2">
              <h1 className="text-2xl font-medium text-gray-900 leading-tight rubik-2 mb-2">
                Welcome to PopX
              </h1>
              <p className="text-[#1D2226] opacity-80 tracking-[0.5px] text-base leading-relaxed mb-4  text-left w-full h-auto">
                Lorem ipsum dolor sit amet, <br/> consectetur adipisicing elit.
              </p>

              <div className="space-y-3 w-full">
                <button onClick={CreateAccount} className=" w-full py-3 rounded-md bg-[#6C25FF] hover:bg-violet-700 text-white font-medium transition cursor-pointer rubik-2 text-sm">
                  Create Account
                </button>
                <button onClick={SignIn} className="w-full py-3 rounded-md bg-[#6C25FF4B] text-[#1D2226] font-semibold hover:bg-purple-300 transition cursor-pointer rubik-2 text-sm">
                  Already Registered? Login
                </button>
              </div>
            </div>
          </div>
        )}

        {page === 2 && (
          <div className="text-left py-2">
            <h1 className="w-full text-xl font-medium text-gray-900 mb-3 rubik-2 leading-relaxed">
              Signin to your <br/> PopX account
            </h1>
            <p className="text-gray-500 text-base mb-2 max-w-full leading-relaxed">
              Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,
            </p>

            <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); setPage(4); }}>
              <div>
                <label className="w-fit bg-[#F7F8F9] px-2 translate-3 block text-sm font-semibold text-[#6C25FF] relative">
                  Email Address
                </label>
                <input
                    type="email"
                    placeholder="Enter email address"
                    className="w-full mt-1 px-3 py-2 border-2 border-[#cdcdcd] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C25FF] bg-gray-50 bg-opacity-50 text-sm"
                  />
              </div>

              <div>
                <label className="w-fit bg-[#F7F8F9] px-2 translate-3 block text-sm font-semibold text-[#6C25FF] relative">
                  Password 
                </label>
                <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full mt-1 px-3 py-2 border-2 border-[#cdcdcd] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C25FF] bg-gray-50 bg-opacity-50 text-sm"
                  />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-md bg-gray-300 hover:bg-gray-400 text-white font-semibold cursor-pointer mt-4 text-sm"
              >
                Login
              </button>
            </form>
          </div>
        )}

        {page === 3 && (
          <div className="text-left py-2">
            <h1 className="text-xl font-semibold text-gray-900 mb-4 rubik-2 leading-relaxed">
              Create your <br/> PopX account
            </h1>

            <form className="space-y-3 rubik-2" onSubmit={(e) => { e.preventDefault(); setPage(4); }}>
              <div>
                <label className="w-fit bg-[#F7F8F9] px-1 translate-3 block text-sm font-normal text-[#6C25FF]">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Marry Doe"
                  className="w-full mt-1 px-3 py-2 border-2 border-[#cdcdcd] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#6C25FF] rubik-2"
                />
              </div>

              <div>
                <label className="w-fit bg-[#F7F8F9] px-1 translate-3 block text-sm font-normal text-[#6C25FF]">
                  Phone number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Marry Doe"
                  className="w-full mt-1 px-3 py-2 border-2 border-[#cdcdcd] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#6C25FF] rubik-2"
                />
              </div>

              <div>
                <label className="w-fit bg-[#F7F8F9] px-1 translate-3 block text-sm font-normal text-[#6C25FF]">
                  Email address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Marry Doe"
                  className="w-full mt-1 px-3 py-2 border-2 border-[#cdcdcd] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#6C25FF] rubik-2"
                />
              </div>

              <div>
                <label className="w-fit bg-[#F7F8F9] px-1 translate-3 block text-sm font-normal text-[#6C25FF]">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  placeholder="Marry Doe"
                  className="w-full mt-1 px-3 py-2 border-2 border-[#cdcdcd] text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C25FF] rubik-2"
                />
              </div>

              <div>
                <label className="w-full px-1 block translate-3 text-sm font-normal bg-[#F7F8F9] text-[#6C25FF]">
                  Company name
                </label>
                <input
                  type="text"
                  placeholder="Marry Doe"
                  className="w-full mt-1 px-3 py-2 border-2 border-[#cdcdcd] text-black rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#6C25FF] rubik-2"
                />
              </div>

              <div className="pt-2">
                <p className="text-sm font-semibold text-gray-900 mb-2 rubik-2">
                  Are you an Agency? <span className="text-red-500">*</span>
                </p>
                <div className="flex items-start gap-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="agency" value="yes" className="text-[#6C25FF] w-4 h-4 accent-violet-600" defaultChecked />
                    <span className="text-gray-700 text-sm">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="agency" value="no" className="text-[#6C25FF] w-4 h-4 accent-violet-600" />
                    <span className="text-gray-700 text-sm">No</span>
                  </label>
                </div>
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-md bg-[#6C25FF] hover:bg-violet-700 text-white font-medium transition rubik-2 text-sm"
                >
                  Create Account
                </button>
              </div>
              
            </form>
            
          </div>
        )}

        {page === 4 && (
          <div className="text-left -mx-4 -mt-4">
            <div className="bg-white p-3 shadow-sm border-b border-gray-200 mb-4">
              <h1 className="text-base font-normal text-gray-900 rubik-2">Account Settings</h1>
            </div>

            <div className="px-4">
              <div className="flex gap-3 mb-4">
                <div className="relative">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden bg-gray-200">
                    <img
                      src="../profile.png"
                      alt="profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-[-4px] bg-violet-600 rounded-full border-2 border-violet-600">
                    <img
                      src="/cam.png"
                      alt="camera"
                      className="w-4 h-4 rounded-full"
                    />
                  </div>
                </div>
                <div className="pt-2">
                  <p className="font-semibold text-gray-900 text-sm rubik-2">Marry Doe</p>
                  <p className="text-gray-600 text-xs font-medium">Marry@Gmail.Com</p>
                </div>
              </div>

              <p className="text-black font-[400] text-sm leading-relaxed opacity-80 w-full">
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
                Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
                Erat, Sed Diam
              </p>
            </div>
            <div className="border-t border-b border-gray-300 my-4 h-[60vh] w-full" style={{
              borderImage:
                "repeating-linear-gradient(90deg, #d1d5db 0, #d1d5db 8px, transparent 8px, transparent 12px) 1",
            }}>

            </div>
            

          </div>
        )}


        {page === 5 && (
          <div className="flex flex-col items-center justify-center text-center h-[60vh] px-4">
            <div className="w-16 h-16 bg-green-500 text-white flex items-center justify-center rounded-full mb-4 text-2xl">
              ✅
            </div>
            <h1 className="text-xl font-bold text-gray-900 mb-2 rubik-2">
              Login Successful!
            </h1>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Welcome back to your PopX account 🎉
            </p>
            <button
              onClick={() => setPage(1)}
              className="px-4 py-2 rounded-md bg-violet-600 text-white hover:bg-violet-700 transition cursor-pointer text-sm font-medium"
            >
              Go to Home
            </button>
          </div>
        )}


      </div>



      <div className="flex items-center justify-center gap-4 pt-4 w-full max-w-sm px-4">

        <button onClick={goHome} className="text-gray-500 hover:text-gray-700 cursor-pointer p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-4 h-4"
          >
            <path d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75h-5.25v-6h-6v6H3.75A.75.75 0 013 21V9.75z" />
          </svg>
        </button>


        <button
          onClick={goPrev}
          className="text-gray-500 hover:text-gray-700 disabled:opacity-40 cursor-pointer p-2"
          disabled={page === 1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>


        <span className="text-xs text-gray-600 font-medium">
          {page} of {totalPages}
        </span>


        <button
          onClick={goNext}
          className="text-gray-500 hover:text-gray-700 disabled:opacity-40 cursor-pointer p-2"
          disabled={page === totalPages}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
