function Button({ name, background, text, callback }) {
    return (
        <>
            <div
                className={`cursor-pointer rounded-lg px-3 py-2.5 h-full flex justify-center items-center ${
                    background ? background : "bg-white"
                } ${text ? text : "text-black"}`}
                onClick={callback}
            >
                <p className="text-sm">{name}</p>
            </div>
        </>
    );
}

export default Button;
