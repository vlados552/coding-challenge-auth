function CompanyLogo({ textColor = "text-black" }) {
    return (
        <div className="flex justify-center items-center gap-2">
            <img src="/logo.png" alt="Lidabro" width={50} />
            <h1 className={`text-base font-bold ${textColor}`}>Lidabro</h1>
        </div>
    );
}

export default CompanyLogo;
