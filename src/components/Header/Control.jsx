function Control({ name, icon }) {
    return (
        <div className="flex flex-col items-center cursor-pointer">
            {icon}
            <p className="text-xs text-gray-600">{name}</p>
        </div>
    );
}

export default Control;
