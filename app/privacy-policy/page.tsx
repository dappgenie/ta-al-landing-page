import React from 'react';
import Link from 'next/link';



import { Transition } from '@/components/Transition';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteConfig.siteUrl}`,
  },
};

export default function Page() {
  return (
    <section id='aboutUs' className='container relative py-14 lg:py-16'>
      <div className='shadow' />
      <Transition
        animationType='left'
        className='text-3xl font-bold md:text-4xl'
      >
        Privacy Policy for Ta'al
      </Transition>
      <p className='mt-5 text-base font-light'>
        This Privacy Policy outlines how Ta'al ("Company," "we," "our," or "us")
        collects, uses, stores, and protects the personal data of our users
        ("User," "you," or "your"). By using our platform, you agree to the
        practices described in this policy.
      </p>

      <h4 className='text-xl mt-12'>Data Collection</h4>
      <p className='mt-2 text-base font-light'>
        We collect personal data necessary for the operation of our platform and
        services. This may include:
      </p>
      <ul className='list-disc list-inside mt-2 text-base font-light'>
        <li>Emirates ID (EID) and related identification documents.</li>
        <li>Resumes and employment-related information.</li>
        <li>Contact details, such as email, phone number, and address.</li>
        <li>Payment information for processing transactions.</li>
      </ul>

      <h4 className='text-xl mt-12'>Purpose of Data Collection</h4>
      <p className='mt-2 text-base font-light'>
        Your personal data is collected and used for the following purposes:
      </p>
      <ul className='list-disc list-inside mt-2 text-base font-light'>
        <li>
          Facilitating the matching of users with part-time job opportunities.
        </li>
        <li>Verification of user identity and eligibility.</li>
        <li>
          Communication regarding job opportunities, platform updates, and
          support.
        </li>
        <li>Compliance with legal and regulatory requirements.</li>
      </ul>

      <h4 className='text-xl mt-12'>Data Storage and Security</h4>
      <p className='mt-2 text-base font-light'>
        We are committed to safeguarding your data by implementing appropriate
        technical and organizational measures. Your data is stored securely and
        is only accessible to authorized personnel.
      </p>
      <h4 className='text-xl mt-12'>User Account Deletion</h4>
      <p className='mt-2 text-base font-light'>
        You may request the deletion of your account at any time. Upon
        completion of this process:
      </p>
      <ul className='list-disc list-inside mt-2 text-base font-light'>
        <li>
          All personal data we have collected, including Emirates ID (EID),
          resumes, and other uploaded documents, will be permanently deleted
          from our servers.
        </li>
      </ul>
      <p className='mt-2 text-base font-light'>
        To initiate account deletion, please contact us via email at{' '}
        <Link href={'mailto:support@taaluae.com'} className='text-primary'>
          support@taaluae.com
        </Link>
        . Our team will guide you through the process and confirm once your data
        has been erased.
      </p>

      <h4 className='text-xl mt-12'>Data Sharing</h4>
      <p className='mt-2 text-base font-light'>
        We do not sell or rent your personal data to third parties. Data may be
        shared with:
      </p>
      <ul className='list-disc list-inside mt-2 text-base font-light'>
        <li>
          Verified clients or agencies for job matching purposes, as consented
          by you.
        </li>
        <li>Regulatory authorities or law enforcement when required by law.</li>
      </ul>

      <h4 className='text-xl mt-12'>Cookies and Tracking Technologies</h4>
      <p className='mt-2 text-base font-light'>
        We use cookies and similar technologies to enhance your user experience
        on our platform. These may include:
      </p>
      <ul className='list-disc list-inside mt-2 text-base font-light'>
        <li>Session cookies for account authentication.</li>
        <li>Analytical cookies for platform performance insights.</li>
      </ul>
      <p className='mt-2 text-base font-light'>
        You can control or disable cookies through your browser settings, but
        this may affect the platform's functionality.
      </p>

      <h4 className='text-xl mt-12'>User Rights</h4>
      <p className='mt-2 text-base font-light'>
        As a user, you have the right to:
      </p>
      <ul className='list-disc list-inside mt-2 text-base font-light'>
        <li>Access the personal data we hold about you.</li>
        <li>Request correction or updating of inaccurate information.</li>
        <li>Withdraw consent for data processing, where applicable.</li>
        <li>
          Request deletion of your personal data, as detailed in the "User
          Account Deletion" section.
        </li>
      </ul>

      <h4 className='text-xl mt-12'>Changes to the Privacy Policy</h4>
      <p className='mt-2 text-base font-light'>
        We reserve the right to update this Privacy Policy as necessary. Changes
        will be communicated to users through the platform or via email.
        Continued use of the platform after such updates constitutes your
        acceptance of the revised policy.
      </p>

      <h4 className='text-xl mt-12'>Contact Us</h4>
      <p className='mt-2 text-base font-light'>
        For questions, concerns, or requests regarding your personal data or
        this Privacy Policy, please contact us at support@taaluae.com.
        <br />
        Effective Date: 26/12/2024
        <br />
        This Privacy Policy ensures transparency and protects your rights while
        using Ta'al's platform.
      </p>

      <Transition
        animationType='left'
        className='mt-16 text-3xl font-bold md:text-4xl'
      >
        General Terms and Conditions
      </Transition>
      <h4 className='text-xl mt-12'>Scope</h4>
      <p className='mt-5 text-base font-light'>
        Ta'al (the “Company”) operates an online platform (the “Platform”)
        accessible through{' '}
        <Link href={'https://www.taaluae.com'} className='text-primary'>
          www.taaluae.com
        </Link>{' '}
        and related channels. This Platform connects Clients (as defined below)
        with Service Providers (as defined below) to facilitate part-time job
        opportunities. The Company itself does not directly provide these
        services but acts as an intermediary. These General Terms and Conditions
        govern access to and use of the Platform and related services.
        Submitting an application on the Platform does not establish a binding
        contract between the Company and the Service Provider. The Company
        reserves the right to reject any application without providing a reason
        or request amendments before proceeding. Approval of an application is
        at the Company's sole discretion. Service Providers must ensure that all
        information provided during registration is accurate, current, and
        complete. Any errors in Platform content, job postings, pricing, or
        other documentation may be corrected without liability to the Company.
        Changes to these General Terms and Conditions are effective only when
        explicitly agreed to in writing by both parties.
      </p>

      <h4 className='text-xl mt-12'>DEFINITIONS</h4>
      <ul className='list-disc list-inside mt-2 text-base font-light'>
        <li>
          <span className='font-semibold'>Client:</span> Any individual or
          entity requesting services through the Platform.
        </li>
        <li>
          <span className='font-semibold'>Job:</span> The execution of services
          by a Service Provider at designated premises as specified in the job
          details provided by the Company.
        </li>
        <li>
          <span className='font-semibold'>Job Posting:</span> A document
          containing details of a Client's request, including required attire,
          occasion, recipient's name, premises, date and time, specific
          instructions, and any additional requests.
        </li>
        <li>
          <span className='font-semibold'>Platform:</span> The Company's website
          (www.taaluae.com) or other digital channels used to connect Clients
          with Service Providers.
        </li>
        <li>
          <span className='font-semibold'>Personal Data:</span> Information that
          identifies or can be used to contact a Service Provider, such as name,
          date of birth, address, email, phone number, photos, nationality, and
          other documentation required by the Company.
        </li>
        <li>
          <span className='font-semibold'>Premises:</span> Locations where
          services are to be performed, such as offices, homes, restaurants, or
          other private or public spaces.
        </li>
        <li>
          <span className='font-semibold'>Recipient:</span> The individual(s)
          receiving the service, who may or may not be the Client.
        </li>
        <li>
          <span className='font-semibold'>Service:</span> Tasks performed by the
          Service Provider as agreed upon based on Client requests.
        </li>
        <li>
          <span className='font-semibold'>Service Provider:</span> A licensed,
          independent professional offering services through the Platform.
        </li>
      </ul>

      <h4 className='text-xl mt-12'>PURPOSE AND SCOPE OF PERFORMANCE</h4>
      <p className='mt-5 text-base font-light'>
        Upon approval of an application, the Company assigns Service Providers
        to perform specific tasks for Clients who request these services through
        the Platform or other communication channels. Service Providers are
        required to execute these tasks at the designated premises as outlined
        in the job posting. Assignments are contingent upon Client demand and do
        not guarantee a minimum number of jobs for Service Providers.
      </p>

      <h4 className='text-xl mt-12'>
        RESPONSIBILITIES AND OBLIGATIONS OF THE SERVICE PROVIDER
      </h4>
      <p className='mt-5 text-base font-light'>
        By submitting an application through the Platform, the Service Provider
        represents and warrants that:
      </p>
      <ul className='list-disc list-inside mt-2 text-base font-light'>
        <li>
          They comply with all applicable laws and regulations in the UAE.
        </li>
        <li>
          Services will be delivered in a timely, professional, and
          industry-standard manner.
        </li>
        <li>
          They have obtained, at their expense, all necessary licenses, permits,
          visas, and certifications required to perform services in the UAE. The
          Service Provider indemnifies the Company against any claims arising
          from failure to obtain or maintain these credentials.
        </li>
        <li>
          Services will be personally rendered by the Service Provider unless
          the Company consents to the use of subcontractors.
        </li>
        <li>
          Personal Data provided to the Company is accurate and up-to-date.
        </li>
      </ul>

      <h4 className='text-xl mt-12'>CONFIDENTIALITY</h4>
      <p className='mt-5 text-base font-light'>
        Both parties agree to keep all information regarding the other party’s
        business operations confidential and use such information solely for its
        intended purpose. Confidential information may only be disclosed under
        the following circumstances:
      </p>
      <ul className='list-disc list-inside mt-2 text-base font-light'>
        <li>When publicly known at the time of disclosure.</li>
        <li>
          When legally required and with prior notice to the disclosing party.
        </li>
        <li>
          Upon termination of the agreement, all confidential materials must be
          returned to the disclosing party.
        </li>
      </ul>

      <h4 className='text-xl mt-12'>PAYMENT TERMS</h4>
      <p className='mt-5 text-base font-light'>
        The Service Provider's fee will be calculated based on agreed-upon
        hourly rates. The Company retains a gross margin, added to the Service
        Provider's hourly rate, which will be displayed to Clients as the total
        hourly rate. Fees include all costs, including transportation, unless
        otherwise agreed.
      </p>

      <h4 className='text-xl mt-12'>RELATIONSHIP & REPRESENTATION</h4>
      <p className='mt-5 text-base font-light'>
        The Service Provider operates as an independent contractor and not as an
        employee, agent, or partner of the Company. They are not authorized to
        represent the Company, bind it to third-party agreements, or collect
        payments on its behalf.
      </p>

      <h4 className='text-xl mt-12'>REFUND & CANCELLATION POLICY</h4>
      <p className='mt-5 text-base font-light'>
        The refund and cancellation policy is as follows:
      </p>
      <ul className='list-disc list-inside mt-2 text-base font-light'>
        <li>
          Cancellations 24 hours before job start: Full refund to Client; no
          payment to Service Provider.
        </li>
        <li>
          Cancellations within 24 hours before job start: 25% charge to Client;
          20% payment to Service Provider.
        </li>
        During the job: No refund; Client charged for hours worked.
      </ul>

      <h4 className='text-xl mt-12'>DELIVERY TIMEFRAME FOR SERVICES</h4>
      <p className='mt-5 text-base font-light'>
        Staff requests are fulfilled within 48-72 hours, depending on the size
        and complexity of the request.
      </p>

      <h4 className='text-xl mt-12'>
        INDEMNIFICATION AND LIMITATION OF LIABILITY
      </h4>
      <p className='mt-5 text-base font-light'>
        The Service Provider indemnifies the Company against claims arising from
        their use of the Platform, violations of these terms, or their
        negligence or misconduct. The Company is not liable for any damages
        arising from use of the Platform or inability to use it.
      </p>

      <h4 className='text-xl mt-12'>DATA PROTECTION POLICY</h4>
      <p className='mt-5 text-base font-light'>
        The Company complies with UAE data protection laws and collects Personal
        Data only as necessary for administrative, marketing, and operational
        purposes. Personal Data will be deleted upon termination of the service
        agreement. The Company employs robust security measures to protect such
        data.
      </p>

      <h4 className='text-xl mt-12'>COPYRIGHT</h4>
      <p className='mt-5 text-base font-light'>
        All Platform content, including the brand “Ta’al,” is the exclusive
        property of the Company and may not be reproduced without prior written
        consent. Service Providers are granted limited rights to access and use
        the Platform for its intended purpose only.
      </p>

      <h4 className='text-xl mt-12'>APPLICABLE LAW AND JURISDICTION</h4>
      <p className='mt-5 text-base font-light'>
        These General Terms and Conditions are governed by UAE law. Any disputes
        shall be resolved in the Dubai Courts.
      </p>

      <h4 className='text-xl mt-12'>MISCELLANEOUS</h4>
      <p className='mt-5 text-base font-light'>
        The governing language is English, and all dates and terms adhere to the
        Gregorian calendar. If any provision is deemed invalid, it will be
        replaced with a valid one that closely reflects its original intent,
        without affecting the remaining provisions.
      </p>
    </section>
  );
}