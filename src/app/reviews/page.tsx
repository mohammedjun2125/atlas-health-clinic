import type { Metadata } from 'next';
import PageHeader from '@/components/common/page-header';
import StarRating from '@/components/common/star-rating';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { reviews } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Patient Reviews',
  description: 'Read what our patients have to say about their experience at Atlas Health Clinic.',
};

export default function ReviewsPage() {
  return (
    <div className="pb-24">
      <PageHeader
        title="What Our Patients Say"
        subtitle={
          <>
            We are proud to have earned the trust of our community. Here’s what our patients are saying on Google.
            <div className="mt-4 inline-flex items-center justify-center w-full">
              <StarRating rating={5.0} />
              <p className="ml-2 font-semibold text-foreground">
                5.0 Overall Rating from 5,000+ Reviews
              </p>
            </div>
          </>
        }
      />
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <Card key={index} className="flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {review.author.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{review.author}</h3>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground italic">"{review.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
