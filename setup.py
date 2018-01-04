###############################################################################
#
# Copyright (C) 2017 Andrew Muzikin
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.
#
###############################################################################

from setuptools import setup


setup(name='btgym',
      description='OpenAI Gym Environment API for Backtrader portfolio backtesting engine',
      keywords='openai gym reinforcement learning backtrader portfolio trading',
      author='Andrew Muzikin',
      author_email='muzikinae@gmail.com',
      gurl = 'https://github.com/Kismuz/btgym',
      license='GPLv3+',
      classifiers=['Development Status :: 3 - Alpha',],
      version='0.0.6',
      install_requires=[
            'tensorflow',
            'opencv-python',
            'gym[atari]',
            'backtrader',
            'pyzmq',
            'matplotlib==2.0.2',
            'pillow',
            'numpy',
            'scipy',
            'pandas',
            'ipython',
            'psutil',
            'logbook'
      ],
      include_package_data=True,
)