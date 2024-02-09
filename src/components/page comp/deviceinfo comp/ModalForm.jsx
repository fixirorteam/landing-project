"use client";
import { useState, useEffect, useRef } from "react";

const ButtonDropdownOptions = ({ options, onSelectOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelectOption = (option) => {
    onSelectOption(option);
    setIsOpen(false); // Menutup dropdown setelah opsi dipilih
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Menutup dropdown jika yang diklik bukan bagian dari dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          Sort By
          {/* Mengganti ikon dropdown berdasarkan status dropdown (buka/tutup) */}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-.707.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectOption(option)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 w-full text-left"
                role="menuitem"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ModalForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // tambahkan field lain sesuai kebutuhan
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Lakukan apa yang Anda inginkan dengan data formulir di sini
    setIsOpen(false);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
      <section className="max-[1024px]:hidden">
        <div className="flex w-[900px] h-[120px] bg-white mt-[2rem] rounded-3xl shadow-xl shadow-slate-500 items-center justify-between px-8">
          <div className="mx-2">
            <input
              type="text"
              placeholder="search...."
              className="w-full h-[50px] px-4 border-2 rounded-lg"
            />
          </div>
          <div className="flex gap-6">
            <div>
              <ButtonDropdownOptions
                options={["By Chip Id", "By name", "By Date"]}
                onSelectOption={handleSelectOption}
              />
              {selectedOption && <p>Anda memilih: {selectedOption}</p>}
            </div>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
            >
              Connect Device
            </button>
            {isOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                <div className="bg-white rounded-xl p-8 w-[700px] h-[500px] overflow-y-auto">
                  <h2 className="text-2xl font-semibold mb-4">
                    Silahkan Mengisi Detail Perangkat
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mt-8 mb-4">
                      <label
                        htmlFor="name"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Chip ID
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Nama Perangkat
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        IP Address
                      </label>
                      <input
                        type="ip"
                        id="ip"
                        name="ip address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Letak Perangkat
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Jenis Perangkat
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                      />
                    </div>
                    {/* Tambahkan field formulir lainnya di sini sesuai kebutuhan */}

                    <div className="flex mt-8 justify-end">
                      <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                      >
                        Batal
                      </button>
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Simpan
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ModalForm;
