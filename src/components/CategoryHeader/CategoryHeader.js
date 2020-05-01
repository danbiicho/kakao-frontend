import React, { Component } from 'react';
import InfoBlock from '../../components/CategoryHeader/InfoBlock';
import SelectBox1 from '../SelectBox/SelectBox1';
import SelectBox2 from '../SelectBox/SelectBox2';
import HeaderData from './CategoryHeaderData'
import '../CategoryHeader/CategoryHeader.scss';

class CategoryHeader extends Component {
    render() {
        return (<></>
            // <div className="CategoryHeader">
            //     <InfoBlock />
            //     <div className="listFilter">
            //         <SelectBox2 options={[
            //             { name: '판매량순' },
            //             { name: '신상품순' },
            //             { name: '낮은 가격순' },
            //             { name: '높은 가격순' },
            //         ]} />
            //         <SelectBox1 options={
            //             HeaderData.map(el => {
            //                 return (
            //                     { name: el.name, src: el.src, srcChange: el.srcChange }
            //                 )
            //             })} />
            //     </div>
            // </div>
        );
    }
}

export default CategoryHeader;