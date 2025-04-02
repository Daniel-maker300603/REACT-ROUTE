import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/about');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-2xl p-6 max-w-sm w-full">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Iniciar Sesión</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded-md" {...register('email')} required />
                    </div>
                    <div>
                        <label className="block text-gray-700">Contraseña</label>
                        <input type="password" className="w-full p-2 border border-gray-300 rounded-md" {...register('password')} required />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition">
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;