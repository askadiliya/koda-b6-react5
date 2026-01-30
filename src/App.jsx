import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const isSmoker = watch("isSmoker");

  const onSubmit = (data) => {
    localStorage.setItem("smokerForm", JSON.stringify(data));
    console.log("DATA DISIMPAN:", data);
    alert("Data berhasil disimpan ke Local Storage!");
  };

  return (
    <div className="min-h-screen bg-[#f1f3f4] flex justify-center py-10 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl bg-white rounded-lg shadow-sm overflow-hidden"
      >
        <div className="border-t-8 border-purple-600 px-6 py-5">
          <h1 className="text-2xl font-semibold text-gray-900">
            Form Survey Perokok
          </h1>
          <p className="text-gray-600 mt-2 text-sm">
            Mohon isi data dengan jujur dan sesuai kondisi Anda.
          </p>
        </div>

        <div className="px-6 py-6 space-y-8">
          <div>
            <label className="block text-sm font-medium mb-2">
              Nama Lengkap
            </label>
            <input
              type="text"
              placeholder="Jawaban Anda"
              {...register("name", { required: "Nama wajib diisi" })}
              className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2 text-sm"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Umur</label>
            <input
              type="number"
              placeholder="Jawaban Anda"
              {...register("age", {
                required: "Umur wajib diisi",
                min: { value: 10, message: "Minimal umur 10 tahun" },
                max: { value: 100, message: "Maksimal umur 100 tahun" },
              })}
              className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2 text-sm"
            />
            {errors.age && (
              <p className="text-red-500 text-xs mt-1">
                {errors.age.message}
              </p>
            )}
          </div>

          <div>
            <p className="text-sm font-medium mb-3">Jenis Kelamin</p>
            <div className="space-y-2">
              {["Laki-Laki", "Perempuan"].map((item) => (
                <label key={item} className="flex items-center gap-3 text-sm">
                  <input
                    type="radio"
                    value={item}
                    {...register("gender", {
                      required: "Pilih jenis kelamin",
                    })}
                    className="accent-purple-600"
                  />
                  {item}
                </label>
              ))}
            </div>
            {errors.gender && (
              <p className="text-red-500 text-xs mt-1">
                {errors.gender.message}
              </p>
            )}
          </div>

          <div>
            <p className="text-sm font-medium mb-3">
              Apakah Anda seorang perokok?
            </p>
            <div className="space-y-2">
              {["Ya", "Tidak"].map((item) => (
                <label key={item} className="flex items-center gap-3 text-sm">
                  <input
                    type="radio"
                    value={item}
                    {...register("isSmoker", {
                      required: "Pilih salah satu",
                    })}
                    className="accent-purple-600"
                  />
                  {item}
                </label>
              ))}
            </div>
            {errors.isSmoker && (
              <p className="text-red-500 text-xs mt-1">
                {errors.isSmoker.message}
              </p>
            )}
          </div>

          {isSmoker === "Ya" && (
            <div>
              <p className="text-sm font-medium mb-3">
                Jika Anda perokok, rokok apa yang pernah Anda coba?
              </p>
              <div className="space-y-2">
                {[
                  "Gudang Garam Filter",
                  "Lucky Strike",
                  "Marlboro",
                  "Esse",
                ].map((item) => (
                  <label key={item} className="flex items-center gap-3 text-sm">
                    <input
                      type="checkbox"
                      value={item}
                      {...register("cigarettes")}
                      className="accent-purple-600"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>
          )}


          <div className="flex items-center gap-4 pt-4">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-6 py-2 rounded"
            >
              Kirim
            </button>
            <button
              type="button"
              onClick={() => reset()}
              className="text-purple-600 text-sm font-medium"
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;