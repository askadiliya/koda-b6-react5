function App() {
  return (
    <div className="min-h-screen bg-[#f1f3f4] flex justify-center py-10 px-4">
      <form className="w-full max-w-2xl bg-white rounded-lg shadow-sm overflow-hidden">

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
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="name"
              placeholder="Jawaban Anda"
              className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2 text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Umur
            </label>
            <input
              type="number"
              name="age"
              min={10}
              max={100}
              placeholder="Jawaban Anda"
              className="w-full border-b-2 border-gray-300 focus:border-purple-600 outline-none py-2 text-sm"
              required
            />
          </div>

          <div>
            <p className="text-sm font-medium text-gray-900 mb-3">
              Jenis Kelamin
            </p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-sm">
                <input
                  type="radio"
                  name="gender"
                  value="Laki-Laki"
                  className="accent-purple-600"
                  required
                />
                Laki-Laki
              </label>
              <label className="flex items-center gap-3 text-sm">
                <input
                  type="radio"
                  name="gender"
                  value="Perempuan"
                  className="accent-purple-600"
                />
                Perempuan
              </label>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-900 mb-3">
              Apakah Anda seorang perokok?
            </p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-sm">
                <input
                  type="radio"
                  name="isSmoker"
                  value="Ya"
                  className="accent-purple-600"
                  required
                />
                Ya
              </label>
              <label className="flex items-center gap-3 text-sm">
                <input
                  type="radio"
                  name="isSmoker"
                  value="Tidak"
                  className="accent-purple-600"
                />
                Tidak
              </label>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-900 mb-3">
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
                    name="cigarettes[]"
                    value={item}
                    className="accent-purple-600"
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-6 py-2 rounded"
            >
              Kirim
            </button>
            <button
              type="reset"
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
