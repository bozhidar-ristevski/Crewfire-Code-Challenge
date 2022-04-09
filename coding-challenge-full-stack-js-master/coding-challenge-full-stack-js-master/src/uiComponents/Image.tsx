
interface ImageBlockProps {
    author: string;
    link: string;
}

export const ImageBlock = ({ author, link }: ImageBlockProps) => (
    <div className="column" >
                          <div className="center">
                        <p>{author}</p>
                        </div>
                      <br/>
                      <img src={link} alt="Logo" />
                   </div>
);
