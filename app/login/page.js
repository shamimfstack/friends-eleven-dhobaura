export default function Login() {
    return (
        <div className="flex min-h-screen max-w-6xl mx-auto items-center justify-center p-24">
            <div className="w-full md:w-1/2 border p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl text-green-600 font-bold">Login Here</h2>
            <form>
                <div className="py-4">
                <label>Full Name:</label>
                <input className="w-full border p-2 rounded-sm" type="text" placeholder="Enter full name"/>
                </div>

                <div className="py-4">
                <label>Email:</label>
                <input className="w-full border p-2 rounded-sm" type="email" placeholder="Enter Email" />
                </div>
                

                <div className="py-4">
                <label>Phonw:</label>
                <input className="w-full border p-2 rounded-sm" type="phone" placeholder="Enter Phone" />
                </div>

                <div className="py-4">
                <label>Gender:</label>
                <input className="w-full border p-2 rounded-sm" type="gender" placeholder="Enter Gender" />
                </div>

                <input className="w-full bg-green-600 text-white p-2 rounded-sm" type="submit" value="Register" />
            </form>
            </div>
        </div>
        );
}