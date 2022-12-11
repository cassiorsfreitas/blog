/* eslint-disable multiline-ternary */
import React, { useState } from 'react'
import { Container } from './styles'
import { Form, FormState } from '../../../lib/types'
import ErrorMessage from '../../atoms/ErrorMessage'
import SuccessMessage from '../../atoms/SuccessMessage'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'

const Newsletter = () => {
  const [form, setForm] = useState<FormState>({ state: Form.Initial })
  const [email, setEmail] = useState(null)

  const subscribe = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    setForm({ state: Form.Loading })

    const res = await fetch(`/api/subscribe?email=${email}`, {
      method: 'POST'
    })

    const { error } = await res.json()
    if (error) {
      setForm({
        state: Form.Error,
        message: error
      })
      return
    }

    setEmail(null)
    setForm({
      state: Form.Success,
      message: "Hooray! You're now on the list."
    })
  }

  return (
    <>
      <Container data-testid="newsletter-container">
        Subscribe to the newsletter
        <p className="">
          Get emails from me about web development, tech, and early access to
          new articles.
        </p>
        <form className="content" onSubmit={subscribe}>
          <div className="input-container">
            <Input
              aria-label="Email for newsletter"
              placeholder="tim@apple.com"
              type="email"
              required
              fullWidth
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="button-container">
            <Button
              className="button-subscribe"
              submit
              fullWidth
              disabled={!email}
            >
              {form.state === Form.Loading ? 'Loading...' : 'Subscribe'}
            </Button>
          </div>
        </form>
        {form.state === Form.Error ? (
          <ErrorMessage>{form.message}</ErrorMessage>
        ) : form.state === Form.Success ? (
          <SuccessMessage>{form.message}</SuccessMessage>
        ) : (
          <div className="info">
            <a
              href="https://www.getrevue.co/profile/cassiorsfreitas"
              target="_blank"
              rel="noopener noreferrer"
            >
              View all issues
            </a>
          </div>
        )}
      </Container>
    </>
  )
}

export default Newsletter
