'use client';

import type React from 'react';

import { useState } from 'react';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card';
import { Alert, AlertDescription } from '@/src/components/ui/alert';
import { Checkbox } from '@/src/components/ui/checkbox';
import { Eye, EyeOff, Leaf, Mail, Lock, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const fullName = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (!acceptTerms) {
      setError('Please accept the terms and conditions');
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    if (!/^[A-Za-z\s]{2,}$/.test(fullName)) {
      setError(
        'Full name must be at least 2 letters and contain only letters and spaces'
      );
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Signup failed');
        setIsLoading(false);
        return;
      }

      // Optionally, redirect or auto-login here
      window.location.href = '/login';
    } catch {
      setError('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 p-4">
      <div className="grid w-full max-w-6xl items-center gap-8 lg:grid-cols-2">
        {/* Left side - Image and branding */}
        <div className="hidden flex-col items-center justify-center space-y-6 lg:flex">
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <h1 className="text-3xl font-bold text-green-800">
                Weekly Quickly
              </h1>
            </div>
            <p className="max-w-md text-lg text-green-700">
              Join thousands of food enthusiasts discovering healthy, delicious
              recipes every day.
            </p>
          </div>
          <Image
            src="/placeholder.svg?height=400&width=500"
            alt="Fresh ingredients and cooking preparation"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right side - Signup form */}
        <div className="mx-auto w-full max-w-md">
          <Card className="border-0 bg-white/80 shadow-xl backdrop-blur-sm">
            <CardHeader className="space-y-1 text-center">
              <div className="mb-4 flex items-center justify-center space-x-2 lg:hidden">
                <Leaf className="h-6 w-6 text-green-600" />
                <h1 className="text-2xl font-bold text-green-800">
                  Weekly Quickly
                </h1>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Create your account
              </CardTitle>
              <CardDescription className="text-gray-600">
                Start your journey to healthier eating today
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      className="border-gray-300 pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="border-gray-300 pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a password"
                      className="border-gray-300 pr-10 pl-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirm your password"
                      className="border-gray-300 pr-10 pl-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={acceptTerms}
                    onCheckedChange={(checked) =>
                      setAcceptTerms(checked as boolean)
                    }
                    className="border-gray-300"
                  />
                  <Label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{' '}
                    <Link
                      href="/terms"
                      className="text-green-600 hover:text-green-700 hover:underline"
                    >
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link
                      href="/privacy"
                      className="text-green-600 hover:text-green-700 hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-600 text-white hover:bg-green-700"
                  disabled={isLoading}
                >
                  {isLoading ? 'Creating account...' : 'Create account'}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link
                  href="/login"
                  className="font-medium text-green-600 hover:text-green-700 hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
