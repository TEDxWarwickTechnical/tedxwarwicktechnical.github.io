######
Design
######

.. important::
   Your working directory is assumed to be the root of your local copy of the
   repository. Some commands may not work as expected if this is not the case.


Setting up a local instance
===========================

These instructions assume you have a local copy of the repository already. If
you don't, clone one now.

1. Ensure you have `Ruby <https://www.ruby-lang.org/>`_ and `rbenv
   <https://github.com/rbenv/rbenv>`_ installed. If you're running on \*nix,
   you can use your existing system Ruby (the version shouldn't be important as
   long as rbenv will run). If you're running on Windows, be sure to use `WSL
   <https://docs.microsoft.com/en-us/windows/wsl/about>`_.

2. Identify the current version of Ruby used by the website as per
   *.ruby-version*. At the time of writing, it should be **2.5.1**.

3. Install that version of ruby using :code:`rbenv install 2.5.1` (with the
   appropriate version number). Running :code:`ruby --version` should now
   return the same version number from within the working directory.

4. Install `Bundler <https://bundler.io/>`_ using :code:`gem install bundler`,
   then the remainder of the project dependencies using :code:`bundle install
   --path vendor/bundle`.

5. You should occasionally run :code:`bundle update` to ensure your local
   dependencies are kept up to date with the versions used by GitHub Pages.


Using your local instance
=========================

To preview the site locally, simply run :code:`bundle exec jekyll serve`.
Jekyll will watch the repository directory in the background and rebuild the
site if anything changes. You can optionally add :code:`--live-reload` to the
above command which will make any browser windows viewing your local copy
refresh with every rebuild. Your local copy of the website will be available at
`<http://localhost:4000/>`_, but `only from your computer
<https://stackoverflow.com/q/19482164/1813169>`_.
