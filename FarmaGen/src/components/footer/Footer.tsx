function Footer() {
    const data = new Date().getFullYear();

    return (
        <div className="flex justify-center bg-indigo-900 text-white">
            <div className="container flex flex-col items-center py-4">
                <p className='text-lg font-semibold text-center'>
                    Drogaria Saúde+ &copy; {data}
                </p>
                <p className="text-sm">Todos os direitos reservados.</p>
            </div>
        </div>
    );
}

export default Footer;
