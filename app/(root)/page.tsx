
import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { getCurrentUser } from '@/lib/actions/auth.action'
import { getInterviewsByUserId, getLatestInterviews } from '@/lib/actions/general.action'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = async () => {
  const user = await getCurrentUser();

  const [userInterviews, latestInterviews] = await Promise.all([
    await getInterviewsByUserId(user?.id!),
    await getLatestInterviews({ userId: user?.id! })
  ])

  const hasPastInterviews = userInterviews?.length > 0;
  const hasUpComingInterviews = latestInterviews?.length > 0;

  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-powered Practice and Feedback</h2>

          <p className="text-lg">Practice on real interview questions and get instant feedback</p>
      
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image src="/robot.png" alt="robo-dude" width={400} height={400}
          className="max-sm:hidden"/>

      </section>

      <section className="flex flex-col gap-6 mt-8">

        <h2>Your Interviews</h2>

        <div className="interviews-section">
          {
            hasPastInterviews ? (
              userInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id}/>
            ))) : (
              <p>You have not given any interview yet</p>
            )
          }
        </div>

      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>

        <div className="interviews-section">
          {
            hasUpComingInterviews ? (
              latestInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id}/>
            ))) : (
              <p>There are no new interviews available</p>
            )
          }
        </div>
      </section>
    </>
  )
}

export default page