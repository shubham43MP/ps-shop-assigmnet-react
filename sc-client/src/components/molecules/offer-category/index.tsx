import React from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import './styles.scss'
import { Button } from '@mui/material'

type OfferCategoryType = {
    imageURL: string;
    title: string;
    subtitle: string;
    direction?: number;
}

function OfferCategory({
  imageURL,
  title='title',
  subtitle='subtitle',
  direction=0
}: OfferCategoryType) { 
  return (
    <>
      <Card className='offer-cat-base'>
        <Grid direction={ direction %2 === 0 ? 'row' : 'row-reverse' } container spacing={ 2 }>
          <Grid item xs={ 3 } md={ 6 } lg={ 6 }>
            <div className='title-subtitle-button-container'>
              <Typography className='title title-subtitle-base'>
                {title}
              </Typography>
              <Typography className="subtitle title-subtitle-base">
                {subtitle}
              </Typography>
              <Button className="offer-cat-button">{ `Explore ${ title.toLowerCase() }` }</Button>
            </div>
          </Grid>
          <Grid item xs={ 9 } md={ 6 } lg={ 6 }>
            <img id='offercatimage' className='productImage' src={ imageURL } alt="Offer"/>
          </Grid>
        </Grid>
      </Card>
    </>
  )
}

export default OfferCategory
