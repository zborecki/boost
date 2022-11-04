import { ImageType } from '../../types/common';
import { BaseProps, ImageWrapperProps } from '../../types/props';
import { ImageWrapper } from './image.style';

const Image = ({
  width, height, alt, src, className
}: BaseProps & ImageWrapperProps & ImageType): JSX.Element => (
  <ImageWrapper
    className={`${className}__image`}
    width={width}
    height={height}
  >
    <img
      src={src}
      alt={alt}
    />
  </ImageWrapper>
);

export default Image;
