import './Button.css'

const Button = ({ type, title }: { type: "Primary" | "Secondary", title: string }) => {

    if (type === "Secondary") {
        return (
            <button className="secondary-button">{title}</button>
        )
    }

    if (type === "Primary") {
        return (
            <button className="primary-button">{title}</button>
        )
    }

    return (
        <></>
    )
}

export default Button