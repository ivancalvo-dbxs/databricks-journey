import Layout from '@theme/Layout';
import { JSX } from 'react';
import Button from '../components/Button';


const Hero = () => {
  return (
    <div className="px-4 md:px-10 min-h-screen flex flex-col justify-center items-center w-full">
      {/* Logo & Title Section */}
      <div className="relative w-full flex flex-col items-center">
        <div className="flex flex-row items-center justify-center w-full max-w-3xl relative z-10">
          {/* Logo Left */}
          <div className="flex-shrink-0 mr-6">
            <img src="img/journey.svg" alt="Databricks Journey" className="w-40 md:w-48" />
          </div>
          {/* Title Right */}
          <h1 className="text-4xl md:text-5xl font-bold text-left mb-0">
            <span>Databricks Starter Journey</span>
          </h1>
        </div>
      </div>

      {/* Provided by 
      <p className="text-center text-gray-600 dark:text-gray-500 mt-4 mb-2">
        Provided by <a href="https://github.com/databricks-industry-solutions" className="underline text-blue-500 hover:text-blue-700">Databricks Industry Solutions</a>
      </p> */}

      {/* Description */}
      <p className="text-lg text-center text-balance mb-8">
        New on Databricks? Follow this guide to accelerate your initial setup and first MVP while following the best practices
      </p>


      {/* Call to Action Buttons */}
      <div className="mt-6 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <Button
          variant="secondary"
          outline={true}
          link="/docs/motivation"
          size="large"
          label={"1. Motivation"}
          className="w-full md:w-auto"
        />
        
        <Button
          variant="secondary"
          outline={true}
          link="/docs/foundations"
          size="large"
          label={"2. Foundations"}
          className="w-full md:w-auto"
        />
        
        <Button
          variant="secondary"
          outline={true}
          link="/docs/before-you-start"
          size="large"
          label={"3. Before you start"}
          className="w-full md:w-auto"
        />
        
        <Button
          variant="secondary"
          outline={true}
          link="/docs/create-workspaces"
          size="large"
          label={"4. Create the Workspace(s)"}
          className="w-full md:w-auto"
        />
        
        <Button
          variant="secondary"
          outline={true}
          link="/docs/post-deployment/"
          size="large"
          label={"5. Post-deployment Setup"}
          className="w-full md:w-auto"
        />
        
      </div>
    </div>
  );
};



export default function Home(): JSX.Element {
  return (
    <Layout>
      <main>
        <div className='flex justify-center mx-auto'>
          <div className='max-w-screen-lg'>
            <Hero />
          </div>
        </div>
      </main>
    </Layout>
  );
}
