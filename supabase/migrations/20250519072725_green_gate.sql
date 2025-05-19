/*
  # Create subscriptions schema

  1. New Tables
    - `subscriptions`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `plan` (text)
      - `status` (text)
      - `stripe_customer_id` (text)
      - `stripe_subscription_id` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      - `current_period_end` (timestamptz)

  2. Security
    - Enable RLS on `subscriptions` table
    - Add policies for authenticated users to read their own subscriptions
*/

CREATE TABLE IF NOT EXISTS subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  plan text NOT NULL,
  status text NOT NULL,
  stripe_customer_id text,
  stripe_subscription_id text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  current_period_end timestamptz,
  UNIQUE(user_id)
);

ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own subscription"
  ON subscriptions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own subscription"
  ON subscriptions
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);