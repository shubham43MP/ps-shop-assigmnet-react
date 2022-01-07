import React from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import './styles.scss'

type OfferCategoryType = {
    imageURL: string;
    title: string;
    subtitle: string;
    direction?: number;
    categoryId: string;
    handleOfferClick: (item: string) => void;
}

function OfferCategory({
  imageURL,
  title='title',
  subtitle='subtitle',
  direction=0,
  categoryId,
  handleOfferClick
}: OfferCategoryType) { 
  return (
    <>
      <Card className='offer-cat-base'>
        <Grid direction={ direction % 2 === 0 ? 'row' : 'row-reverse' } container spacing={ 2 }>
          <Grid
            item
            xs={ 6 }
            md={ 6 }
            lg={ 6 }
            className='ts-container'
          >
            <div className='title-subtitle-button-container'>
              <Typography className='title title-subtitle-base'>
                {title}
              </Typography>
              <Typography className="subtitle title-subtitle-base">
                {subtitle}
              </Typography>
              <Button
                className="offer-cat-button"
                onClick={ () => handleOfferClick(categoryId) }

              >
                { `Explore ${ title.toLowerCase() }` }
              </Button>
            </div>
          </Grid>
          <Grid item xs={ 6 } md={ 6 } lg={ 6 } className="image-container">
            <img id='Offer Category Image' className='productImage' src={ imageURL } alt="Offer"/>
          </Grid>
        </Grid>
      </Card>
    </>
  )
}

export default OfferCategory
