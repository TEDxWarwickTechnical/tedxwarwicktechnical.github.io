##############
Making Changes
##############

Overview
========

Our website is hosted on `Github Pages <https://pages.github.com/>`_, and is
built statically using `Jekyll <https://jekyllrb.com/>`_.

.. admonition:: Info

   A *static* website consists of pages with fixed content. In order to make
   changes to it, you must modify the files that are sent to the users
   directly. A *statically built* website uses two sets of files: one that you
   modify, and one that's sent to the user. Every time you make a change to the
   first set, the second must be regenerated from the first using a program
   like Jekyll. This program is called a *static site generator*.

The files used to generate the website (the *source files*) are stored in a
`git <https://git-scm.com/>`_ repository on Github; you can find it here:
`github.com/TEDxWarwickTechnical/tedxwarwicktechnical.github.io
<https://github.com/TEDxWarwickTechnical/tedxwarwicktechnical.github.io>`_.
Unless you're creating large-scale edits, you'll probably never need to use git
directly.

Before progressing further, it's useful to introduce some of the terminology
used in git. Although you (probably) won't be using git directly, the same
concepts are applicable. If you're already familiar with git, feel free to skip
ahead to the :ref:`next section <our-use-of-git>`.

Git in 5 minutes
================

Git is a *version control system* or *VCS*. A git *repository* stores a
collection of files along with information about who changed them, and when.
This allows you to "wind back the clock" in case a mistake is made, or just to
see what used to be.

You can have multiple copies of the same repository in several places. A copy
on your own computer is called a *local copy*. Every other copy is then a
*remote*. The central copy is called *origin*. In our case, origin is stored on
Github.

To make changes to the repository, you make a *commit*. This contains one or
more modified files, along with the *author* (you) and a *commit message* which
should be a brief (just a few words) description of what you changed.

From this point, it's useful to think of a repository as just a timeline of
commits, one after the other, with changes built on changes. However, that's
not quite the complete picture. Instead of committing your changes to the main
timeline (called *master*), you can opt to create a *branch* instead. A branch
runs parallel to master with its own set of commits. Over time, the branch will
diverge further from master as more changes are made to both.

Once you've made your changes in the branch, you may wish to add those changes
to master. Instead of just copy-pasting your changes and making a new commit to
master, you can *merge* your branch into master. The branch still exists, but
it's now connected to master at both ends. A new commit (the *merge commit*) is
added to master automatically. Where possible, *merge conflicts* are resolved
automatically. A conflict occurs when changes have been made to the same file
in both master and the branch. When an automatic resolution is not possible,
you will be prompted to select which parts of the file should come from the
master's version and which from the branch's.

It should be noted that branches can be created from other branches, and merged
into other branches as well. In this way, master is just another branch.

A *fork* is like a branch, but exists in a new, separate repository. You can
create a fork without making any changes to the original repository. Forks
cannot be merged back into the original repository. Instead, you must submit a
*pull request* to the owner of the repository. Your request will remain open
until the owner of the original repository either merges or closes it.

.. _our-use-of-git:

Our use of git
==============

Many of the features described above can be used directly through Github's web
interface. The instructions here will cover a purely web-based approach to
editing the website.

Making a change yourself
------------------------



Requesting a change
-------------------

If you can't make a change yourself (perhaps because you don't have the
necessary information on hand), you can file an issue
