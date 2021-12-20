import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

type OfferCategoryType = {
    imageURL: string;
    title: string;
    subtitle: string;
}

function OfferCategory({
  imageURL,
  title='title',
  subtitle='subtitle',
}: OfferCategoryType) { 
  return (
    <div>
      <Card >
        <CardContent className='cardContent'>
          <div className='titleSubtitleContainer'>
            <Typography className='categoryTitle'>
              {title}
            </Typography>
            <Typography className="categorySubtitle">
              {subtitle}
            </Typography>
          </div>
          <img className='productImage' src={ imageURL } alt="Offer"/>
        </CardContent>
      </Card>
    </div>
  )
}

export default OfferCategory
//sc-client/src/static/images/category/baby.png
