import styled from 'styled-components';

const gap = '10px';
const columnGap = gap;

const Title = styled.h2.attrs(props => ({ className: props.classifier || '' }))`
    font-size: 2rem;
    font-weight: 300;
    margin: 0;
`;

const SubTitle = styled.h3.attrs(props => ({ className: props.classifier || '' }))`
    font-size: 1.2rem;
    font-weight: 300;
    margin:0;
`;

const Image = styled.img`
    width: 128px;
    height: 128px;
`;

const AboutItem = styled.span.attrs(props => ({ className: 'About-item' }))`
    display: inline-block;
    padding-right: 1rem;
`;

const LineLayout = styled.span`
    display: block;
    padding-top: ${props => props.gap || '5px'};
`;

const ColumnLayout = styled.div`
    display: grid;
    grid-template-columns: ${props => props.columns || '1fr 1fr'};
    column-gap: ${columnGap};
`;

const Section = styled.section.attrs(props => ({ className: props.classifier || '' }))`
    padding-top: ${gap};
`;

const Chip = styled.div.attrs(props => ({ className: props.classifier || '' }))`
    background-color: gray;
    border-radius: 10px;
    padding: 7px;
    display: inline-block;
    margin: 5px;
`;

const ProfilePage = styled.div`
    width: 724px;
    margin-left: auto;
    margin-right: auto;
`;

export { ProfilePage, Title, SubTitle, Section, Image, Chip, AboutItem, ColumnLayout, LineLayout };

export default () => {};
