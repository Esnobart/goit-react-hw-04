export const ImageCard = ({ data }) => {
    return (
        <div>
            <img alt={data.alt_description || "Default image description"} src={data.urls.small} />
        </div>
    )
}