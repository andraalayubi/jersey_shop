<?php

namespace Database\Seeders;

use Illuminate\Support\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    DB::table('users')->insert([
      [
        'id' => Str::uuid(),
        'name' => 'Nur Fauziah',
        'email' => 'jia@gmail.com',
        'password' => Hash::make('password'),
        'is_admin' => true,
        'created_at' => Carbon::now(),
        'updated_at' => Carbon::now(),
      ],
      [
        'id' => Str::uuid(),
        'name' => 'Andra Al Ayubi',
        'email' => 'andra@gmail.com',
        'password' => Hash::make('password'),
        'is_admin' => true,
        'created_at' => Carbon::now(),
        'updated_at' => Carbon::now(),
      ],
      [
        'id' => Str::uuid(),
        'name' => 'Hammam Mujahid',
        'email' => 'hammam@gmail.com',
        'password' => Hash::make('password'),
        'is_admin' => true,
        'created_at' => Carbon::now(),
        'updated_at' => Carbon::now(),
      ],
    ]);
  }
}
