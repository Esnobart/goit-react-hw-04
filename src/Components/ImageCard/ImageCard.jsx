export const ImageCard = ({ data }) => {
    return (
        <div>
            <img alt={data.alt_description} src={data.urls.small} />
        </div>
    )
}